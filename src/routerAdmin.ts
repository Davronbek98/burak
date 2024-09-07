import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/", restaurantController.getLogin);

routerAdmin.get("/", restaurantController.getSignup);

export default routerAdmin;
