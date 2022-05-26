import postDetails from "../model/postDetails.js"
import  Mongoose  from "mongoose"

export const getPosts = async ( req, res ) =>
{

    try
    {
        const postDetail = await postDetails.find()

        res.status( 200 ).json( postDetail )
    } catch ( error )
    {
        res.status( 404 ).json( { message: error.message } )
    }
}

export const createPost = async ( req, res ) =>
{
    const post = req.body;
    const newPost = new postDetails({...post, creator : req.userId, createdAt : new Date().toISOString()} )
    try
    {
        await newPost.save()
        res.status( 201 ).json( newPost )
    } catch ( error )
    {
        res.status( 409 ).json( { message: error.message } )
    }
}

export const updatePost = async(req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("We cannot find this post");
   
    const updatedPost = await postDetails.findByIdAndUpdate(_id,{ ...post, _id}, {new: "true"});
    res.json(updatedPost);
    console.log(1);
}
export const deletePost = async (req, res) => {
    const { id} = req.params;
    if(!Mongoose.Types.ObjectId.isValid(id)) res.status(404).send("Post not found")
    await postDetails.findByIdAndRemove(id)
    res.send("Post deleted succesfully");
    console.log(1)
}
export const likePost = async (req, res) => {
    const { id } = req.params;
    // check if user is authenticated
    if(!req.userId) return res.status(401).json({message : "Unauthenticated"})
    if(!Mongoose.Types.ObjectId.isValid(id)) res.status(409).send("Post not found");

    const post = await postDetails.findById(id)
    /// If user Id is alredy in the like section
   const index = post.likes.findIndex((id) => id === String(req.userId))
    if(index === -1){
        //like the post
        post.likes.push(req.userId)
    }else{
        //dislike the post
        post.likes = post.likes.filter((id) => id !== String(req.userId))
    }
    const updatedLikedPost = await postDetails.findByIdAndUpdate(id, post, {new : "true"})
    res.json(updatedLikedPost);
    console.log(post.likes)
}