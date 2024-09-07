import express from "express";
const router = express.Router();
import memberController from "./controllers/members.controller";

router.get("/", memberController.goHome);

router.get("/", memberController.getLogin);

router.get("/", memberController.getSignup);

export default router;
