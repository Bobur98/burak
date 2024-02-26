
import express from 'express';
import path from 'path' 
import router from './router';
import routerAdmin from './routerAdmin';

/** 1-ENTRANCE **/
const app = express();
console.log("__dirname:", __dirname);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** 2-SESSIONS **/
/** 3-VIEWS **/
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/** 4-ROUTERS **/
/* Burak BackEnd loyihasini ikki maqsadda ishlatamiz: 
   1: SPA: userlar uchun hizmat qiladigan REACT loyihamiz uchun rest api server sifatida ishlatamiz
   2: SSR: backend server side rendering: EJS
*/

app.use('/admin', routerAdmin) 
app.use('/', router) 

export default app;