import mongoose, { mongo } from "mongoose"
import User from "./User.js"

const Schema = mongoose.Schema

const boardSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

boardSchema.virtual("lists", {
    ref: "List",
    localField: "_id",
    foreignField: "boardId"
})

// A compound index to enforce unique board names per user
boardSchema.index({ owner: 1, title: 1 }, { unique: true });

boardSchema.methods.toResponse = async function () {
    const ownerObject = await User.findById(this.owner).exec()
    let memberUsers = this.members.map(async (member) => {
        const user = await User.findById(member).exec()
        return user
    })
    memberUsers = await Promise.all(memberUsers)
    const membersUsernames = memberUsers.map(member => member.username)

    return {
        id: this._id,
        title: this.title,
        description: this.description,
        owner: ownerObject.username,
        members: membersUsernames,
        createdAt: this.createdAt
    }
}

export default mongoose.model("Board", boardSchema)