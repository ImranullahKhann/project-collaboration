import User from "../models/User.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt"

// @desc registration for a user
// @route POST /users/register
// @access Public
// @required fields {email, username, password}
// @return User
const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    // confirm data
    if (!email || !username || !password) {
        return res.status(400).json({message: "All fields are required"});
    }

    // hash password
    const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

    const userObject = {
        "username": username,
        "passwordHash": hashedPwd,
        "email": email
    };

    let createdUser = null

    try {
        createdUser = await User.create(userObject);
    }
    catch (e) {
        return res.status(422).json({
            errors: {
                body: "Unable to register a user",
                reason: e
            }
        });
    }

    if (createdUser) { // user object created successfully
        res.status(201).json({
            user: createdUser.toUserResponse()
        })
    } else {
        res.status(422).json({
            errors: {
                body: "Unable to register a user"
            }
        });
    }
});

// @desc login for a user
// @route POST /api/users/login
// @access Public
// @required fields {email, password}
// @return User
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // confirm data
    if (!email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }

    const loginUser = await User.findOne({ email: email }).exec();


    if (!loginUser) {
        return res.status(404).json({message: "User Not Found"});
    }

    const match = await bcrypt.compare(password, loginUser.passwordHash);

    if (!match) return res.status(401).json({ message: 'Unauthorized: Wrong password' })

    res.status(200).json({
        user: loginUser.toUserResponse()
    });

});


export { registerUser, userLogin }