import express from "express"
import { createList, updateList, deleteList, getList } from "../controllers/listController.js"

const router = express.Router()

// create a list
router.post("/create", createList)

// update title or position
router.put("/:id", updateList)

// fetch one list with cards
router.get('/:id', getList)

// delete a list
router.delete("/:id", deleteList)

export default router
