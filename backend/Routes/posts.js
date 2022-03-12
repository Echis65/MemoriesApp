import express from "express"
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controller/posts.js";

const router = express.Router()

router.get( "/", getPosts )
router.post( "/", createPost )
router.patch("/:id", updatePost )
router.delete("/:id", deletePost)
router.patch("/:id/likedPost", likePost)

export default router;
