import dotenv from "dotenv"
import createServer from "./utils/server.js"
import connectDB from "./utils/dbConnect.js"
import mongoose from "mongoose"

dotenv.config()
connectDB()

const app = createServer()
const port = process.env.PORT || 4000

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
})