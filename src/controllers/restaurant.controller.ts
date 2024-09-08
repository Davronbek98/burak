import { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login");
  } catch (err) {
    console.log("Error, Login:", err);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup");
  } catch (err) {
    console.log("Error, Signup:", err);
  }
};

export default restaurantController;
