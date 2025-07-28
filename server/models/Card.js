import mongoose from "mongoose"

const Schema = mongoose.Schema

const cardSchema = new Schema({
    listId: {
        type: Schema.Types.ObjectId,
        ref: "List"
    },
    title: String,
    description: String,
    labels: [String],
    dueDate: {
        type: Date,
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    position: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

cardSchema.virtual("labels", {
    ref: "Label",
    localField: "_id",
    foreignField: "cardId"
})

export default mongoose.model("Card", cardSchema)