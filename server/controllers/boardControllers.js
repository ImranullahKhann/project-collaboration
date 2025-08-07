import asyncHandler from "express-async-handler"
import User from "../models/User.js"
import Board from "../models/Board.js"

// @desc getting user's boards
// @route /boards/get
// @access Private
// @return Boards
const userBoards = asyncHandler(async (req, res) => {
    const user = req.user

    const foundUser = await User.findOne({ username: user.username, passwordHash: user.password }).populate('boards')

    const boards = foundUser.boards

    if (!boards) {
        return res.status(200).json({
            message: "No boards found."
        })
    }

    const boardPromises = boards.map(async (board) => {
        const resp = await board.toResponse()
        return resp
    })

    const boardsResponse = await Promise.all(boardPromises)

    res.status(200).json(boardsResponse)
})

// @desc creates a board 
// @route /boards/create
// @access Private
// @required {title, desc}
// @return Board
const createBoard = asyncHandler(async (req, res) => {
    const user = req.user
    const { title, desc } = req.body

    if (!title) {
        res.status(400).json({
            message: "Invalid Request"
        })
    }

    const boardObject = {
        title: title,
        description: desc || "",
        owner: user.id
    }

    let board = null
    
    try {
        board = await Board.create(boardObject)
    }
    catch (e) {
        return res.status(422).json({
            message: "Unable to create a list",
            error: e
        })
    }

    const resp = await board.toResponse()

    res.status(201).json(resp)
})

// @desc gets a user's board with it's lists
// @route GET /boards/:id
// @access Private
// @return Board 
const getBoard = asyncHandler(async (req, res) => {
    const id = req.params.id
    const board = await Board.findById(id).exec()
    const boardResponse = await board.toResponse()
    const popBoards = await board.populate('lists')
    const lists = popBoards.lists.map(list => list.toResponse())
    const respObject = {
        board: boardResponse,
        lists: lists
    }
    res.status(200).json(respObject)
})

export { userBoards, createBoard, getBoard }
