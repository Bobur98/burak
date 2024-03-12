import express from "express";
import restaurentController from "./controllers/restaurent.controller";
import productController from "./controllers/product.controller";

const routerAdmin = express.Router();

// Restaurant
routerAdmin.get('/', restaurentController.goHome);

routerAdmin
    .get('/login', restaurentController.getLogin)
    .post("/login", restaurentController.processLogin);

routerAdmin
    .get("/signup", restaurentController.getSignup)
    .post('/signup', restaurentController.processSignup)

routerAdmin.get('/logout', restaurentController.logout);
routerAdmin.get('/check-me', restaurentController.checkAuthSession);

// Product
routerAdmin.get('/product/all', productController.getAllProducts);
routerAdmin.post('/product/create', productController.createNewProduct);
routerAdmin.post('/product/:id', productController.updateChosenProduct);

// User

export default routerAdmin; // SPA: 