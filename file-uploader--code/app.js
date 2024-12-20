import express from "express";
import cors from "cors";
import router from "./src/routes/api.js";

const app = new express();
app.use(cors());

app.use(express.json({ limit: "500mb" }));

app.use("/api", router);

app.use("/uploads-file", express.static("uploads"));

export default app;
