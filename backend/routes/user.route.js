import { Router } from "express";
import {
    loginUser,
    logoutUser,
    emailVerification,
    registerUser
} from "../controller/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/loginUser")
    .post(loginUser);

router.route("/logout")
    .post(isLoggedIn, logoutUser);
export default router;

