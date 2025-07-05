// Import express
import express from "express";

// Import auth controller
import { register, login, logout } from "../controllers/authController.js";

// Import Verify token
import verifyToken from "../middlewares/authMiddleware.js";

// Create a new router
const router = express.Router();

// Register a new user
router.post("/register", register);

// Login a user
router.post("/login", login);

// Logout a user
router.post("/logout", verifyToken, logout);

export default router;