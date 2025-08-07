import express from "express"
import { createList, updateList, deleteList } from "../controllers/listController.js"

const router = express.Router()

// create a list
router.post("/create", createList)

// update title or position
router.put("/:id", updateList)

// delete a list
router.delete("/:id", deleteList)

export default router
