import { Request, Response } from "express";
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
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

restaurentController.processSignup = (req: Request, res: Response) => {
   try {
      res.send('processSignup DONE')
   } catch (err) {
      console.log("Error on processSignup: ", err);    
   }
}

export default restaurentController;