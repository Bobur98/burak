import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
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
      
      const file = req.file;
      if(!file)
        throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG)

      const newMember: MemberInput = req.body;
      newMember.memberImage = file?.path.replace(/\\/g, "/");;
      newMember.memberType = MemberType.RESTAURANT

      const result = await memberService.processSignup(newMember);
      
      //SESSIONS AUTHENTICATION
      
      req.session.member = result
      req.session.save(function() {
         res.redirect('/admin/product/all')
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
         res.redirect('/admin/product/all')
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

restaurentController.getUsers = async (req: Request, res: Response) => {
   try {
      console.log("getUsers");
      const result = await memberService.getUsers();

      res.render("users", {users: result})
   } catch (err) {
      console.log("Error on getUsers: ", err);
      res.redirect('/admin/login')    
   }
}

restaurentController.updateChosenUser = async (req: Request, res: Response) => {
   try {
      console.log("updateChosenUser");
      const result = await memberService.updateChosenUser(req.body)

     res.status(HttpCode.OK).json({data:result})
   } catch (err) {
      console.log("Error on updateChosenUser: ", err);
      if(err instanceof Errors) res.status(err.code).json(err)
      else res.status(Errors.standard.code).json(Errors.standard)
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