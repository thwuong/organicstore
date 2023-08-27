import { Router } from "express";
const router = Router();

import {
  login,
  refreshToken,
  register,
  logout,
} from "../controllers/authController.js";

import { verifyRefreshToken } from "../configs/passport.js";

router.post("/login", login);
router.post("/register", register);
router.get("/refreshtoken", verifyRefreshToken, refreshToken);
router.post("/logout", logout);

export default router;
