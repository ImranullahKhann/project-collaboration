import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./config/dbConnect.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config()

connectDB()

const port = 3000

// APIs
app.use(userRoutes)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
})