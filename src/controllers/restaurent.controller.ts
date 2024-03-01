import { Request, Response } from "express";
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
const restaurentController: T = {};

restaurentController.goHome = (req: Request, res: Response) => {
   try {
      console.log("Home page");
      res.send("Home Page")
   } catch(err) {
       console.log('Error on goHome: ', err);
   }
}

restaurentController.getLogin = (req: Request, res: Response) => {
   try {
      console.log("Login page");
      res.send('Login Page')
   } catch (err) {
       console.log('Error on getLogin: ', err);
   }
}

restaurentController.getSignup = (req: Request, res: Response) => {
   try {
      console.log("Signup page");
      res.send('Signup Page')
   } catch (err) {
      console.log("Error on getSignup: ", err);    
   }
}
restaurentController.processLogin = (req: Request, res: Response) => {
   try {
      res.send('DONE')
   } catch (err) {
      console.log("Error on processLogin: ", err);    
   }
}

restaurentController.processSignup = async (req: Request, res: Response) => {
   try {
      res.send('processSignup DONE')
      console.log('body', req.body);

      const newMember: MemberInput = req.body;
      newMember.memberType = MemberType.RESTAURANT

      const memberService = new MemberService()
      const result = await memberService.processSignup(newMember);
      res.send(result)
   } catch (err) {
      console.log("Error on processSignup: ", err);
      res.send(err)    
   }
}

export default restaurentController;