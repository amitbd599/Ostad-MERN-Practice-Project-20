import multer from "multer";

const fileStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, "api-img__" + Date.now() + "__" + file.originalname);
  },
});

let upload = multer({ storage: fileStorageEngine });

export default upload;
