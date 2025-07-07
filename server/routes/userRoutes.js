import express from "express"
import verifyToken from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/content", verifyToken, (req, res) => {
    res.status(200).json({
        message: "You have access."
    })
})

export default router