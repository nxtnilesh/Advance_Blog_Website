import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    next(errorHandler(400, "All field are required"));
  }
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.json("Signup successfully");
  } catch (error) {
    next(error);
  }
};
