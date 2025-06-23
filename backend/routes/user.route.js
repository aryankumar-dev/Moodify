import { Router } from "express";
import {
    loginUser,
    logoutUser,
    emailVerification,
    registerUser, getme
} from "../controller/user.controller.js";
import isLoggedIn from "../middlewares/checkuser.middlewares.js"
import { userLoginValidator, userRegisterValidator } from "../validators/index.js";


const router = Router();

router.route("/register").post(userRegisterValidator(), registerUser);

router.route("/loginUser").post(userLoginValidator(), loginUser);

router.route("/logout").post(isLoggedIn, logoutUser);

router.route("/emailVerification/:token")
    .get(emailVerification);

router.route("/getme")
    .get(isLoggedIn,getme);

export default router;

