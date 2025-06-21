import { Router } from "express";
import {
    loginUser,
    logoutUser,
    emailVerification,
    registerUser
} from "../controller/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);

export default router;