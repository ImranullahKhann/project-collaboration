import express from "express"
import bcrypt from "bcrypt"

const router = express.Router()
let Users = []

router.post('/register', async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body
        if (!username || !password)
            res.status(400).json({
                message: 'Incomplete information.'    
            })
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = { username: username, password: hashedPassword }
        Users.push(user)
        res.status(201).json({
            message: 'User registered Successfully.'
        })
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Login Failed!'
        })
    }
})

router.post('/login', (req, res) => {
    res.send('hello from login')
})

export default router;