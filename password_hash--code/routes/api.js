import express from "express";
const router = express.Router();
import * as UsersController from "../app/controllers/UsersController.js";

// Users
router.post("/register", UsersController.register);
router.post("/login", UsersController.login);

export default router;
