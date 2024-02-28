import { Request, Response } from "express";
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
const restaurentController: T = {};

restaurentController.goHome = (req: Request, res: Response) => {
   try {
      res.send("Home Page")
   } catch(err) {
       console.log('Error on goHome: ', err);
   }
}

restaurentController.getLogin = (req: Request, res: Response) => {
   try {
      res.send('Login Page')
   } catch (err) {
       console.log('Error on getLogin: ', err);
   }
}

restaurentController.getSignup = (req: Request, res: Response) => {
   try {
      res.send('Signup Page')
   } catch (err) {
      console.log("Error on getSignup: ", err);    
   }
}

export default restaurentController;