import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./utils/dbConnect.js"
import authRoutes from "./routes/authRoutes.js"
import boardRoutes from "./routes/boardRoutes.js"

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
dotenv.config()

connectDB()

const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World')
});


// APIs
app.use('/users', authRoutes)

app.use('/boards', boardRoutes)


app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({
        "message": "Something went wrong!"
    })
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
})