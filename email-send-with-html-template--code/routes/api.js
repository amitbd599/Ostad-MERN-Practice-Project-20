import express from "express";
const router = express.Router();
import * as EmailController from "../app/controllers/EmailController.js";

// Send Email
router.post("/send-email", EmailController.emailSend);
export default router;
