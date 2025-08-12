import mongoose from "mongoose"

const Schema = mongoose.Schema

const cardSchema = new Schema({
    listId: {
        type: Schema.Types.ObjectId,
        ref: "List",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    labels: [String],
    dueDate: {
        type: Date,
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    position: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// A compound index to enforce unique position for every card in a list
cardSchema.index({ listId: 1, position: 1 }, { unique: true })

cardSchema.methods.toResponse = function () {
    return {
        id: this._id,
        listId: this.listId,
        title: this.title,
        desc: this.description,
        labels: this.labels,
        dueDate: this.dueDate,
        assignedTo: this.assignedTo,
        position: this.position,
        createdAt: this.createdAt
    }
}

export default mongoose.model("Card", cardSchema)