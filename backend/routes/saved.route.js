import { Router } from "express";
import savedSong from "../controller/saved.controller.js";

const router = Router();

router.route("/savedsongs").post(savedSong);

export default router;