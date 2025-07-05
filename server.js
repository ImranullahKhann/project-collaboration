import express from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000
dotenv.config()

app.get('/', (req, res) => {
    res.send('Landing Page!')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.get('/register', (req, res) => {
    res.send('Register Page')
})

app.use(authRoutes)

app.get('/content', (req, res) => {
    res.send('Here we have some content!')
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
