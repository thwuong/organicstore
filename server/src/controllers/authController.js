import { generateTokens } from "../configs/passport.js";
import { createError } from "../utils/handleError.js";
import { checkPassword, hashPassword } from "../utils/handlePassword.js";

import userModel from "../models/userModel.js";

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

    let { accessToken, refreshToken } = generateTokens(user.email);
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      accessToken,
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
    let { accessToken, refreshToken } = generateTokens(user.email);
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      accessToken,
      message: "Register successfully",
    });
  } catch (error) {
    next(error);
  }
}

export function refreshToken(req, res, next) {
  try {
    console.log(req.userEmail);

    const { accessToken } = generateTokens(req.userEmail);

    res.json({
      accessToken,
      message: "refresh token successfully",
    });
  } catch (error) {
    next(error);
  }
}
export function logout(req, res, next) {
  res.clearCookie("jwt");

  res.json({
    message: "Logouted successfully",
  });
}
