import EmailSend from "../utility/emailUtility.js";

export const emailSendService = async (req) => {
  try {
    let reqBody = req.body;
    let result = await EmailSend(reqBody);
    return { status: "success", data: result };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
