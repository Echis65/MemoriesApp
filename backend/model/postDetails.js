import mongoose from "mongoose"

const postSchema = mongoose.Schema(
    {
        title: String,
        likeCount: {
            type: Number,
            default: 0
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