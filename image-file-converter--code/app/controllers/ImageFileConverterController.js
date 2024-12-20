import sharp from "sharp";
import path from "path";
import fs from "fs";

export const fileConverter = async (req, res) => {
  try {
    //! 1 file exiting check
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    //! 2 make formatting
    const format = req.query.format || "png";

    //! 3 make folder uploads/converter
    const inputFile = req.file.path;
    const converterDir = path.join(process.cwd(), "uploads", "converter");

    if (!fs.existsSync(converterDir)) {
      fs.mkdirSync(converterDir, { recursive: true });
    }

    const outputFile = path.join(
      converterDir,
      `converted-${Date.now()}.${format}`
    );

    //! 4 convert file to png format
    await sharp(inputFile).png().toFile(outputFile);

    //! 5 send response to client
    res.json({
      message: "Image converted successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
};
