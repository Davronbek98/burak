import express from "express";
const router = express.Router();
import memberController from "./controllers/members.controller";

/** Member **/
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.post("/member/detail", memberController.verifyAuth);

/** Product **/

/** Order **/

export default router;
