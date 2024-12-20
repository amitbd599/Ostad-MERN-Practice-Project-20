import express from "express";
import upload from "../app/middlewares/FileUpload.js";
import * as ImageFileConverterController from "../app/controllers/ImageFileConverterController.js";
const router = express.Router();

router.post(
  "/upload-file",
  upload.single("file"),
  ImageFileConverterController.fileConverter
);

export default router;
