import express from "express";
const router = express.Router();
import upload from "../middleware/FileUpload.js";
import * as FileUploadController from "../controller/FileUploadController.js";

// file-upload
router.post(
  "/file-upload",
  upload.array("file", 20),
  FileUploadController.fileUpload
);

export default router;
