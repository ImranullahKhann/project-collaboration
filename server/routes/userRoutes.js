import express from "express"
import { registerUser, userLogin } from "../controllers/userControllers.js"
import verifyToken from "../middleware/authMiddleware.js"

const router = express.Router()

// Authentication
router.post('/users/login', userLogin);

// Registration
router.post('/users/register', registerUser);

export default router