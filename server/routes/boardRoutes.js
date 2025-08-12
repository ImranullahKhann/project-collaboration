import express from "express"
import { userBoards, createBoard, getBoard, updateBoard, deleteBoard } from "../controllers/boardControllers.js"


const router = express.Router()

// list user’s boards
router.get('/get', userBoards)

// create a new board
router.post('/create', createBoard)

// fetch one board with lists
router.get('/:id', getBoard)

// update board details
router.put('/:id', updateBoard)

// delete a board
router.delete('/:id', deleteBoard)

export default router