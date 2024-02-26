import { Request, Response } from "express";
import { T } from "../libs/types/common"

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
   try {
      res.send("Home Page")
   } catch(err) {
       console.log('Error on goHome: ', err);
   }
}

memberController.getLogin = (req: Request, res: Response) => {
   try {
      res.send('Login Page')
   } catch (err) {
       console.log('Error on getLogin: ', err);
   }
}

memberController.getSignup = (req: Request, res: Response) => {
   try {
      res.send('Signup Page')
   } catch (err) {
      console.log("Error on getSignup: ", err);    
   }
}

export default memberController;