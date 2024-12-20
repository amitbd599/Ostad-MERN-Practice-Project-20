import * as UrlShortenerService from "../services/UrlShortenerService.js";

//! createShortenerURL
export const createShortenerURL = async (req, res) => {
  try {
    let { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "Invalid original URL" });
    }

    const result = await UrlShortenerService.createShortenerURL(originalUrl);

    res
      .status(200)
      .json({ data: result, message: "Shortener url create successfully" });
  } catch (error) {
    return res.status(400).json(error.toString());
  }
};

export const redirectOriginalURL = async (req, res) => {
  try {
    if (!req.params.code) {
      return res.status(400).json({ message: "Invalid params code" });
    }

    const result = await UrlShortenerService.redirectOriginalURL(
      req.params.code
    );

    return res.redirect(result.originalUrl);
  } catch (error) {
    return res.status(400).json(error.toString());
  }
};
