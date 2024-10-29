import User from "../models/auth.model.js";

export const auth = (req, res) => {
  console.log(req.body);
  const newUser = new User();
  res.send(req.body);
};
