export const fileUpload = (req, res) => {
  try {
    if (req.files.length > 0) {
      return res.status(200).json({
        message: "File uploaded successfully",
        file: req.files,
      });
    } else {
      return res.status(400).json({ message: "No file uploaded" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("Server Error");
  }
};
