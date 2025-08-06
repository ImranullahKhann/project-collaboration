import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import Board from "../models/Board.js"

// @desc getting user's boards
// @route /boards/get
// @access Private
// @required Authentication
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
        console.log(resp)
        return resp
    })

    const boardsResponse = await Promise.all(boardPromises)

    res.status(200).json(boardsResponse)
})

// @desc creates a board 
// @route /boards/create
// @access private
// @required 
// @return
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
        board = await Board.create(boardObject);
    }
    catch (e) {
        return res.status(422).json({
            errors: {
                body: "Unable to create the baord",
                reason: e
            }
        })
    }

    const resp = await board.toResponse()

    res.status(201).json(resp)
})

export { userBoards, createBoard }
