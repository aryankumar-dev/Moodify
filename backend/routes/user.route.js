import { Router } from "express";
import {
    loginUser,
    logoutUser,
    emailVerification,
    registerUser
} from "../controller/user.controller.js";
import isLoggedIn from "../middlewares/checkuser.middlewares.js"

const router = Router();

router.route("/register").post(registerUser);

router.route("/loginUser").post(loginUser);

router.route("/logout").post(isLoggedIn, logoutUser);

router.route("/emailVerification/:token")
  .get(emailVerification);

export default router;

