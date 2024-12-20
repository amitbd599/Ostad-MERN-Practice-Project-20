import mongoose from "mongoose";
const DataSchema = mongoose.Schema(
  {
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    urlCode: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false }
);

const URLModel = mongoose.model("urls", DataSchema);

export default URLModel;