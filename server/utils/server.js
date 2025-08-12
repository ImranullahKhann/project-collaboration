import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import chalk from "chalk"
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
    // plain logs
    // app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
    // colorful logs
    app.use(morgan((tokens, req, res) => {
    return [
        chalk.blue(tokens.method(req, res)),
        chalk.green(tokens.url(req, res)),
        chalk.yellow(tokens.status(req, res)),
        chalk.red(tokens['response-time'](req, res) + ' ms'),
        chalk.magenta("length", tokens.res(req, res, 'content-length'))
    ].join(' ');
    }))

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

