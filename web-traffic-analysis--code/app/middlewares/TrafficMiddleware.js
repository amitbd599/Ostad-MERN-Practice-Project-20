import morgan from "morgan";
import TrafficModel from "../model/trafficModel.js";

const TrafficMiddleware = (app) => {
  morgan(":method :url :status :res[content-length] - :response-time ms");

  app.use(
    morgan(async function (tokens, req, res) {
      let [method, url, status, _, __, responseTime, responseTimeMs] = [
        tokens.method(req, res), // method
        tokens.url(req, res), // url
        tokens.status(req, res), // status
        tokens.res(req, res, "content-length"), // _ (ignored, just a placeholder)
        "-", // __ (also ignored, placeholder)
        tokens["response-time"](req, res), // responseTime
        "ms", // responseTimeMs
      ];

      await TrafficModel.create({
        method,
        url,
        responseTimeMs,
        status,
        responseTime,
      });
    })
  );
};

export default TrafficMiddleware;
