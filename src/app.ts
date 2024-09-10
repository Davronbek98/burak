import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

//**  1-ENTRANCE **/

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(MORGAN_FORMAT));
//** 2-SESSIONS  **/

//** 3-VIEWS  **/
app.set("view", path.join(__dirname, "view"));
app.set("view engine", "ejs");

//**  4-ROUTERS **/
app.use("/admin", routerAdmin); // EJS
app.use("/", router); // REACT

export default app;
