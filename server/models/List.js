import mongoose from "mongoose";

const Schema = mongoose.Schema

const listSchema = new Schema({
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    title: String,
    position: Number
})

listSchema.virtual('cards', {
    ref: "Card",
    localField: "_id",
    foreignField: "listId"
})

export default mongoose.model('List', listSchema)