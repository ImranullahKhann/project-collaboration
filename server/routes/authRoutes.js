import express from "express"
import { registerUser, userLogin } from "../controllers/authControllers.js"
import verifyToken from "../middleware/authMiddleware.js"

const router = express.Router()

// Authentication
router.post('/login', userLogin)

// Registration
router.post('/register', registerUser)

export default router