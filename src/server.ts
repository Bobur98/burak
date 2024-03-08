
// Architectural pattern(prjecting suyagi): backend: MVC, DI, frontEnd: MVP

// MVC => Model View Controler

// DI => dependancy injection

// MVP => Model View Presenter

// Design pattern(projectning malum bir qismini arxitukturasi): Middleware, decorator


// MONGODB: CLUSTER => DATABASE => COLLECTION => DOCUMENT
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data)=> {
        console.log('Mongodb connection succeed');
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function(){
            console.log(`The server is running successfully on port: ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`)
        })
    })
    .catch((err: any)=>{
        console.log('ERROR on connection mongodb', err);})


