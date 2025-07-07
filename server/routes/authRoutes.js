import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()
let Users = []

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password)
            return res.status(400).json({
                message: 'Incomplete information.'    
            })
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = { username: username, password: hashedPassword }
        Users.push(user)
        return res.status(201).json({
            message: 'User registered Successfully.'
        })
    }
    catch (e) {
        return res.status(500).json({
            message: 'Login Failed!'
        })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        let isUser = false;
        let passMatch = false;
        let currUser;
        for (const user of Users) {
            if (user.username === username) {
                isUser = true
                passMatch = await bcrypt.compare(password, user.password)
                currUser = user
            }
        }
        if (!isUser)
            return res.status(404).json({
                message: "User does not exist."
            })
        if (!passMatch)
            return res.status(401).json({
                message: "Incorrect Credentials."
            })
        const token = jwt.sign({ username: currUser.username }, process.env.TOKEN_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({token})
    }
    catch (e) {
        return res.status(500).json({
            message: "Authentication Failed."
        })
    }
})

export default router