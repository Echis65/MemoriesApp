import postDetails from "../model/postDetails.js"

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
    const newPost = new postDetails( post )
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
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("We cannot find this post")

    const updatedPost = postDetails.findByIdAndUpdate(_id, post, {new: "true"})
    res.status(201).json(updatedPost);
}