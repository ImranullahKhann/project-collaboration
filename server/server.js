import express from "express"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import bodyParser from "body-parser"
import dotenv from "dotenv"

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config()

const port = 3000

// Web Pages
app.get('/', (req, res) => {
    res.send('Landing Page!')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.get('/register', (req, res) => {
    res.send('Register Page')
})

// APIs
app.use(authRoutes)

app.use(userRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
