import express from "express"
import { createCard, updateCard, deleteCard } from "../controllers/cardControllers.js"

const router = express.Router()

// create a card
router.post("/create", createCard) 

// update card info (title, labels, etc.)
router.put("/:id", updateCard)

// delete a card
router.delete("/:id", deleteCard)

export default router