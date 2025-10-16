import { Router } from "express";
import { signup, login, logout, googleAuth } from "../Controllers/auth.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//Google Auth Route
router.post("/google", googleAuth);

export default router;