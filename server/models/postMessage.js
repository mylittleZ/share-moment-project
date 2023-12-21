import mongoose from 'mongoose'

// Integrates data validation logic into the model layer
// Ensuring data  conforms to predefined structures and rules before being saved to the database
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    },
})

const postMessage = mongoose.model('PostMessage', postSchema)

export default postMessage;