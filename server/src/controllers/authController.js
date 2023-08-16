import { genarateToken } from "../configs/passport.js";
import { createError } from "../utils/handleError.js";
import userModel from "../models/userModel.js";
import { checkPassword, hashPassword } from "../utils/handlePassword.js";
export async function login(req, res, next) {
  let { email, password } = req.body;

  if (!email || !password) {
    return next(createError(400, "Email or password can't be missing"));
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(createError(400, "User not found"));
    }
    // check password
    if (!checkPassword(password, user.password)) {
      return next(createError(400, "Password not match"));
    }

    let token = genarateToken(user.email);
    res.status(200).json({
      token,
      message: "Login successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function register(req, res, next) {
  let { email, password, repeatPassword } = req.body;

  if (!email || !password) {
    return next(createError(400, "Email or password can't be missing"));
  }
  try {
    const foundUser = await userModel.findOne({ email });
    if (foundUser) {
      return next(createError(400, "User has existed"));
    }
    // check password
    if (password !== repeatPassword) {
      return next(createError(400, "Password not match"));
    }

    let user = new userModel({
      email,
      password: await hashPassword(password),
    });

    await user.save();
    let token = genarateToken(user.email);
    res.status(200).json({
      token,
      message: "Register successfully",
    });
  } catch (error) {
    next(error);
  }
}

export function getUser(req, res, next) {
  res.status(200).json({
    email: req.user,
    message: "get successfully",
  });
}
