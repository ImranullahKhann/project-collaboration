import mongoose from "mongoose";

const Schema = mongoose.Schema

const listSchema = new Schema({
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    title: String,
    position: Number
})

listSchema.virtual('cards', {
    ref: "Card",
    localField: "_id",
    foreignField: "listId"
})

listSchema.methods.toResponse = function () {
    return {
        id: this._id,
        boardId: this.boardId,
        title: this.title,
        position: this.position
    }
}

export default mongoose.model('List', listSchema)