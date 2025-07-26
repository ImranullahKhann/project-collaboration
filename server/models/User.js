import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Optional: ensures email is unique in the collection
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Basic email regex
    },
    passwordHash: { 
        type: String,
        required: true
    },
    avatarUrl: String,
    createdAt: { 
        type: Date, 
        default: Date.now() 
    },
})

// Using Virtual Population
userSchema.virtual('boards', {
  ref: 'Board',
  localField: '_id',
  foreignField: 'owner'
})

userSchema.methods.generateAccessToken = function () {
    const accessToken = jwt.sign({
        "user": {
            "id": this._id,
            "username": this.username,
            "email": this.email,
            "password": this.password
        }
    }, 
    process.env.TOKEN_SECRET,
    { expiresIn: "1d" }
    )

    return accessToken
}

userSchema.methods.toUserResponse = function () {
    return {
        username: this.username,
        email: this.email,
        avatarUrl: this.avatarUrl,
        token: this.generateAccessToken()
    }
}

export default mongoose.model('User', userSchema)