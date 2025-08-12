import mongoose from "mongoose";

const Schema = mongoose.Schema

const listSchema = new Schema({
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    title: String,
    position: {
        type: Number,
        required: true
    }
})

listSchema.virtual('cards', {
    ref: "Card",
    localField: "_id",
    foreignField: "listId"
})

// A compound index to enforce unique position for every list in a board
listSchema.index({ boardId: 1, position: 1 }, { unique: true })

listSchema.methods.toResponse = function () {
    return {
        id: this._id,
        boardId: this.boardId,
        title: this.title,
        position: this.position
    }
}

export default mongoose.model('List', listSchema)