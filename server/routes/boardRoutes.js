import express from "express"
import { userBoards, createBoard, getBoard } from "../controllers/boardControllers.js"


const router = express.Router()

// list user’s boards
router.get('/get', userBoards)

// create a new board
router.post('/create', createBoard)

// fetch one board with lists/cards
router.get('/:id', getBoard)

// update board details
// router.put('/:id')

// // delete board
// router.delete('/:id')

export default router