import express from "express";
const router = express.Router();
import * as GitController from "../app/controllers/GitController.js";

router.get("/:owner/:repo", GitController.downloadRepo);

export default router;
