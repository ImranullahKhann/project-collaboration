import express from "express"
import { registerUser, userInfo, userLogin } from "../controllers/userControllers.js"
import verifyToken from "../middleware/authMiddleware.js"

const router = express.Router()

// Authentication
router.post('/users/login', userLogin);

// Registration
router.post('/users/register', registerUser);

// Get User info
router.get('/users/me', verifyToken, userInfo)

export default router