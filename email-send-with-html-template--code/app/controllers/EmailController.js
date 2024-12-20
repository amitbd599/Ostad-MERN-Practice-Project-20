import { emailSendService } from "../service/SendEmailService.js";

//! Send Email service
export const emailSend = async (req, res) => {
  let result = await emailSendService(req);
  return res.json(result);
};
