import { Router } from "express";
import savedSong from "../controller/saved.controller.js";
import isLoggedIn from "../middlewares/checkuser.middlewares.js"
import { savedSongValidator } from "../validators/index.js";

const router = Router();

router.route("/savedsongs").post(isLoggedIn ,savedSongValidator(), savedSong);

export default router;