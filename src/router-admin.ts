import express from "express";
import restaurentController from "./controllers/restaurent.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

const routerAdmin = express.Router();

// Restaurant
routerAdmin.get('/', restaurentController.goHome);

routerAdmin
    .get('/login', restaurentController.getLogin)
    .post("/login", restaurentController.processLogin);

routerAdmin
    .get("/signup", restaurentController.getSignup)
    .post('/signup',makeUploader('members').single('memberImage'), restaurentController.processSignup)

routerAdmin.get('/logout', restaurentController.logout);
routerAdmin.get('/check-me', restaurentController.checkAuthSession);
 
// Product
routerAdmin.get('/product/all', restaurentController.verifyRestaurant, productController.getAllProducts);
routerAdmin.post('/product/create',  restaurentController.verifyRestaurant, makeUploader('products').array('productImages', 5), productController.createNewProduct);
routerAdmin.post('/product/:id',  restaurentController.verifyRestaurant, productController.updateChosenProduct);

// User

export default routerAdmin; // SPA: 