import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema

const boardSchema = Schema({
    title: String,
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
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

export default mongoose.model("Board", boardSchema)