import bcrypt from "bcrypt";
import UserModel from "../model/usersModel.js";

export const registerService = async (req) => {
  try {
    const { email, password } = req.body;
    let data = await UserModel.create({ email, password });
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
export const loginService = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).send("User not found");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { status: "Invalid credentials" };

    return { status: "Login successful" };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
