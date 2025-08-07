import express from "express"
import { registerUser, loginUser } from "../controllers/authControllers.js"


const router = express.Router()

// authentication
router.post('/login', loginUser)

// registration
router.post('/register', registerUser)

export default router