import { Router } from "express";
const router = Router();

import { login, getUser, register } from "../controllers/authController.js";
import { verifyToken } from "../configs/passport.js";

router.post("/login", login);
router.post("/register", register);
router.get("/", verifyToken, getUser);

export default router;
