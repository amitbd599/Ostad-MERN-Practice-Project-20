import TrafficModel from "../model/trafficModel.js";

//! viewTraffic
export const viewTraffic = async (req, res) => {
  let result = await TrafficModel.find().sort({ date: -1 });
  return res.status(200).json(result);
};
