import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";
const restaurentController: T = {};
const memberService = new MemberService()

restaurentController.goHome = (req: Request, res: Response) => {
   try {
      console.log("Home page");
      res.render("home")
   } catch(err) {
       console.log('Error on goHome: ', err);
       res.redirect('/admin')
   }
}

restaurentController.getLogin = (req: Request, res: Response) => {
   try {
      console.log("Login page");
      res.render("login")
   } catch (err) {
       console.log('Error on getLogin: ', err);
       res.redirect('/admin')
   }
}

restaurentController.getSignup = (req: Request, res: Response) => {
   try {
      console.log("Signup page");
      res.render("signup")
   } catch (err) {
      console.log("Error on getSignup: ", err);
      res.redirect('/admin')    
   }
}

restaurentController.processSignup = async (req: AdminRequest, res: Response) => {
   try {
      console.log('body', req.body);

      const newMember: MemberInput = req.body;
      newMember.memberType = MemberType.RESTAURANT

      const result = await memberService.processSignup(newMember);
      
      //SESSIONS AUTHENTICATION
      
      req.session.member = result
      req.session.save(function() {
         res.send(result)
      });


   } catch (err) {
      console.log("Error on processSignup: ", err);
      const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
      res.send(`<script>alert("${message}"); window.location.replace("admin/signup")</script>`)           }
}

restaurentController.processLogin = async (req: AdminRequest, res: Response) => {
   try {
      console.log('processLogin');
      console.log('body: ', req.body);
      const input: LoginInput = req.body;

      const result = await memberService.processLogin(input)
      
       //  SESSIONS AUTHENTICATION
      req.session.member = result
      req.session.save(function() {
         res.send(result)
      });
      
   } catch (err) {
      console.log("Error on processLogin: ", err);
      const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
      res.send(`<script>alert("${message}"); window.location.replace("admin/login")</script>`)        
   }
}



restaurentController.logout = async (req: AdminRequest, res: Response) => {
   try {
      console.log('logout');
      req.session.destroy(function() {
         res.redirect('/admin')
      })
   } catch (err) {
      console.log("Error on logout: ", err);
      res.redirect('/admin')    
   }
}

restaurentController.checkAuthSession = async (req: AdminRequest, res: Response) => {
   try {
      console.log('checkAuthSession');
      if(req.session?.member) res.send(`<script> alert('Hi, ${req.session.member.memberNick}')</script>`)
      else res.send(`<script>alert('${Message.NOT_AUTHENTICATED}')</script>`)   
      
   } catch (err) {
      console.log("Error on processLogin: ", err);    
   }
}

restaurentController.verifyRestaurant = async (req: AdminRequest, res: Response, next: NextFunction) => {
 
      if(req.session?.member?.memberType === MemberType.RESTAURANT){
         req.member = req.session?.member;
         next();
      } else {
         const message = Message.NOT_AUTHENTICATED
         res.send(`<script>alert('${message}'); window.location.replace("/admin/login")</script>`)
   }  
}


export default restaurentController;