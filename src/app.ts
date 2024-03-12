
import express from 'express';
import path from 'path' 
import router from './router';
import routerAdmin from './router-admin';
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';
import session from 'express-session';
import ConnectMongoDBSession from 'connect-mongodb-session';
import { T } from './libs/types/common';

const MongoDBStore = ConnectMongoDBSession(session)
const store = new MongoDBStore({
   // uri: String(process.env.MONGO_URL),
   uri: 'mongodb+srv://Brian:10031998b@cluster0.bkrlpmt.mongodb.net/Burak',
   collection: "sessions"
})

/** 1-ENTRANCE **/
const app = express();
console.log("__dirname:", __dirname);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(
   session({
      secret: String(process.env.SESSION_SECRET),
      cookie: {
         maxAge: 1000 * 3600 * 3// 3 hrs
      },
      store: store,
      resave: true,
      saveUninitialized: true
   })
);

app.use(function(req, res, next){
   const sessionInstance = req.session as T;
   res.locals.member = sessionInstance.member;
   next();
})

/** 3-VIEWS **/
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/** 4-ROUTERS **/
/* Burak BackEnd loyihasini ikki maqsadda ishlatamiz: 
   1: SPA: userlar uchun hizmat qiladigan REACT loyihamiz uchun rest api server sifatida ishlatamiz
   2: SSR: backend server side rendering: EJS
*/

app.use('/admin', routerAdmin) // EJS 
app.use('/', router) // react

export default app;