import { Request, Response } from "express";
import { T } from "../libs/types/common"
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

// For REACT ptoject

const memberController: T = {};
const memberService = new MemberService();

memberController.signup = async (req: Request, res: Response) => {
    try {
       console.log('body', req.body);
 
       const input: MemberInput = req.body;
 
       const result: Member = await memberService.signup(input);
       
    //    TODO: TOKENS AUTHENTICATION

       res.json({member: result})
    } catch (err) {
       console.log("Error on signup: ", err);
       if(err instanceof Errors) {
           res.status(err.code).json(err)
       } else {
        res.status(Errors.standard.code).json(Errors.standard)
       }
    //    res.json(err)    
    }
 }

memberController.login = async (req: Request, res: Response) => {
    try {
       console.log('login');
       console.log('body: ', req.body);

       const input: LoginInput = req.body;
 
       const result = await memberService.login(input)
       
           //    TODO: TOKENS AUTHENTICATION
           
       res.json({member: result})
    } catch (err) {
       console.log("Error on login: ", err);
       if(err instanceof Errors) {
        res.status(err.code).json(err)
        } else {
            res.status(Errors.standard.code).json(Errors.standard)
        }    
    }
 }
 



export default memberController;