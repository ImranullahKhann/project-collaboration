import express from "express"
import verifyToken from "../middleware/authMiddleware.js"
import { userBoards, createBoard } from "../controllers/boardControllers.js"


const router = express.Router()

// list user’s boards
router.get('/get', verifyToken, userBoards)

// create a new board
router.post('/create', verifyToken, createBoard)

// // fetch one board with lists/cards
// router.get('/get/:id')

// // update board details
// router.put('update/:id')

// // delete board
// router.delete('delete/:id')

export default router