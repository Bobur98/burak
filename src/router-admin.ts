import express from "express";
import restaurentController from "./controllers/restaurent.controller";

const routerAdmin = express.Router();

// Restaurant
routerAdmin.get('/', restaurentController.goHome);

routerAdmin
    .get('/login', restaurentController.getLogin)
    .post("/login", restaurentController.processLogin);

routerAdmin
    .get("/signup", restaurentController.getSignup)
    .post('/signup', restaurentController.processSignup)

routerAdmin.get('/check-me', restaurentController.checkAuthSession);

// Product
// User

export default routerAdmin; // SPA: 