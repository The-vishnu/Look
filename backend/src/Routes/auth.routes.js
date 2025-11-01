import { Router } from "express";
import { signup, login, logout, googleAuth, checkAuth } from "../Controllers/auth.controller.js";
import { verifyToken } from "../Middlewares/auth.middleware.js"

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//Google Auth Route
router.post("/google", googleAuth);

router.get("/checkAuth", verifyToken, checkAuth);

export default router;