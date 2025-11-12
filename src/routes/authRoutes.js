import express from "express";
import { register, forgotPassword, resetPassword, login } from "../controllers/authController.js";


const router = express.Router();

router.post("/register", register);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/login", login)
export default router;
