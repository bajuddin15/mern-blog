import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return res.status(409).json({ message: "User already exist" });
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);
    const newUser = new User({ username, email, hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Signup successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { signup };
