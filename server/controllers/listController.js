import asyncHandler from "express-async-handler"
import List from "../models/List.js"

// @desc create a list
// @route POST /lists/create
// @access Private
// @required {boardId, title, position}
const createList = asyncHandler(async (req, res) => {
    const { boardId, title, position } = req.body

    const listObject = {
        boardId: boardId,
        title: title,
        position: position
    }

    try {
        const newList = await List.create(listObject)
    }
    catch (e) {
        return res.status(422).json({
            message: "Unable to create a list",
            error: e
        })
    }
    
    res.status(201).json({
        message: "List created Successfully"
    })
})

// @desc gets a user's list with it's cards
// @route GET /lists/:id
// @access Private
// @return List with it's Cards
const getList = asyncHandler(async (req, res) => {
    const id = req.params.id
    const list = await List.findById(id)
    if (!list) 
        return res.status(404).json({message:"List not found"})
    const listResponse = await list.toResponse()
    const popList = await list.populate('cards')
    const cards = popList.cards.map(card => card.toResponse())

    const respObject = {
        list: listResponse,
        cards: cards
    }
    res.status(200).json(respObject)
})

// @desc update a list
// @route PUT /lists/:id
// @access Private
// @required {text, position}
const updateList = asyncHandler(async (req, res) => {
    const listId = req.params.id

    const { title, position } = req.body

    if (!title || !position) 
        res.json(400).json({
            message: "Please provide the appropriate fields"
        })
        
    try {
        const updatedList = await List.updateOne(
            { _id: listId },
            { $set: { title: title, position: position }}
        )
    }
    catch (e) {
        return res.status(400).json({
            message: "Unable to update the list",
            reason: e
        })
    }

    res.status(200).json({
        message: "List updated Successfully"
    })
})

// @desc  delete a list
// @route DELETE /lists/:id
// @access Private
const deleteList = asyncHandler(async (req, res) => {
    const id = req.params.id
    
    const list = await List.findById(id)
    
    if (!list) 
        return res.status(404).json({
            message: "List not found"
        })
    
    await list.deleteOne()
    
    res.status(204).json()
})

export { createList, updateList, deleteList, getList }