import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import authRoutes from "../routes/authRoutes.js"
import verifyToken from "../middleware/authMiddleware.js"
import boardRoutes from "../routes/boardRoutes.js"
import listRoutes from "../routes/listRoutes.js"
import cardRoutes from "../routes/cardRoutes.js"

const createServer = function () {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser())

    app.get('/', (req, res) => {
        res.send('Hello World')
    });


    // APIs
    app.use('/users', authRoutes)

    app.use('/boards', verifyToken, boardRoutes)

    app.use('/lists', verifyToken, listRoutes)

    app.use('/cards', verifyToken, cardRoutes)

    app.use((err, req, res, next) => {
        console.log(err.stack)
        res.status(500).json({
            "message": "Something went wrong!"
        })
    })

    return app
}

export default createServer

