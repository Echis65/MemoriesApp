import mongoose from "mongoose"

const postSchema = mongoose.Schema(
    {
        title: String,
        likes: {
            type:[String],
            default: []
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        tags: [String],
        message: String,
        creator: String,
        selectedFile: String
    }
)

const postDetails = mongoose.model( "postDetails", postSchema )
export default postDetails;