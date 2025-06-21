import { Router } from "express";
import savedSong from "../controller/saved.controller.js";

import { savedSongValidator } from "../validators/index.js";

const router = Router();

router.route("/savedsongs").post(savedSongValidator(), savedSong);

export default router;