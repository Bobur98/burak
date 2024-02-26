import express from "express";
import restaurentController from "./controllers/restaurent.controller";

const routerAdmin = express.Router();

routerAdmin.get('/', restaurentController.goHome);

routerAdmin.get('/login', restaurentController.getLogin);

routerAdmin.get("/signup", restaurentController.getSignup)

export default routerAdmin; // SPA: 