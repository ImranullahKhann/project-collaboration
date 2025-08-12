import asyncHandler from "express-async-handler"
import Card from "../models/Card.js"

// @desc create a card
// @route POST /cards/create
// @access Private
// @required {listid, title, *desc, *labels, *dueDate, *assignedTo, position}
// @return Card
const createCard = asyncHandler(async (req, res) => {
    const {
        listId,
        title,
        desc,
        labels,
        dueDate,
        assignedTo,
        position
    } = req.body
    const cardObject = {
        listId: listId,
        title: title,
        position: position
    }
    if (desc) cardObject["description"] = desc
    if (labels) cardObject["labels"] = labels
    if (dueDate) cardObject["dueDate"] = dueDate
    if (assignedTo) cardObject["assignedTo"] = assignedTo
    
    let newCard = null

    try {
        newCard = await Card.create(cardObject)       
    }
    catch (e) {
        return    res.status(422).json({
                message: "Unable to create a card",
                reason: e
            })
    }

    const cardResponse = await newCard.toResponse()

    res.status(201).json(cardResponse)
})

// @desc updates a card's fields
// @route PUT /cards/:id
// @access Private
// @required {listid, title, desc, labels, dueDate, assignedTo, position}
const updateCard = asyncHandler(async (req, res) => {
    const id = req.params.id
    const {
        listId,
        title,
        desc,
        labels,
        dueDate,
        assignedTo,
        position
    } = req.body

    const updatedFields = {
        listid: listId,
        title: title,
        description: desc,
        labels: labels,
        dueDate: dueDate,
        assignedTo: assignedTo,
        position: position
    }

    try {
        await Card.updateOne(
            { _id: id},
            { $set: updatedFields }
        )
    }
    catch (e) {
        return res.status(400).json({
            message: "Unable to update the card",
            reason: e
        })
    }
    
    res.status(200).json({
        message: "Card updated successfully"
    })
})

// @desc delets a card
// @route DELETE /tasks/:id
// @access Private
const deleteCard = asyncHandler(async (req, res) => {
    const id = req.params.id
    try {
        await Card.deleteOne({ _id: id })
    }
    catch (e) {
        return res.status(404).message({
            message: "Card not found"
        })
    }

    res.status(204).json()
})

export { createCard, updateCard, deleteCard }