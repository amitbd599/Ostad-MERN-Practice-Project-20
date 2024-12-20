import express from "express";
const router = express.Router();
import * as UrlShortenerController from "../app/controllers/UrlShortenerController.js";

router.post("/create-shortener-url", UrlShortenerController.createShortenerURL);
router.get("/get-url/:code", UrlShortenerController.redirectOriginalURL);

export default router;
