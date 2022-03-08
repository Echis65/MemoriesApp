import express from "express"
import { getPosts, createPost, updatePost } from "../controller/posts.js";

const router = express.Router()

router.get( "/", getPosts )
router.post( "/", createPost )
router.patch("/:id", updatePost )

export default router;
