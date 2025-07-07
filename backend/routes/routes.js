// Import express
import express from "express";

// Import auth controller
import { register, login, logoutAccount, home } from "../controllers/authController.js";

// Import Verify token
import verifyToken from "../middlewares/authMiddleware.js";

// Create a new router
const router = express.Router();

// Register a new user
router.post("/register", register); // POST http://localhost/api/register (Test from Postman)

// Login a user
router.post("/login", login); // POST http://localhost/api/login (Test from Postman)

// Logout a user
router.delete("/logoutAccount", verifyToken, logoutAccount); // DELETE http://localhost/api/logoutAccount (Test from Postman)

// Protected Route
router.get("/home", verifyToken, home);

export default router;
