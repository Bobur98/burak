
// Architectural pattern(prjecting suyagi): backend: MVC, DI, frontEnd: MVP

// MVC => Model View Controler

// DI => dependancy injection

// MVP => Model View Presenter

// Design pattern(projectning malum bir qismini arxitukturasi): Middleware, decorator


// MONGODB: CLUSTER => DATABASE => COLLECTION => DOCUMENT
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data)=> {
        console.log('Mongodb connection succeed');
        const PORT = process.env.PORT ?? 3003;})
    .catch((err)=>{
        console.log('ERROR on connection mongodb', err);})


