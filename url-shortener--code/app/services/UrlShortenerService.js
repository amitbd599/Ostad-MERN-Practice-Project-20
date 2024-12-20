import shortid from "shortid";
import URLModel from "../model/URLModel.js";
import { SHORTENER_BASE_URL } from "../config/config.js";

export const createShortenerURL = async (originalUrl) => {
  const shortenerBaseUrl = SHORTENER_BASE_URL;
  if (!shortenerBaseUrl) {
    res.status(404).json({ message: "Invalid shortener base original URL" });
  }

  const urlCode = shortid.generate(); // Generate a unique URL code

  // Check if the URL is already in the database
  let url = await URLModel.findOne({ originalUrl });
  if (url) {
    return url;
  }

  // If not, create a new short URL
  const shortUrl = `${shortenerBaseUrl}/${urlCode}`;

  let result = await URLModel.create({
    originalUrl,
    shortUrl,
    urlCode,
  });

  return result;
};

export const redirectOriginalURL = async (urlCode) => {
  const url = await URLModel.findOne({ urlCode });

  if (!url) {
    res.status(404).json({ message: "No URL found" });
  }

  return url;
};
