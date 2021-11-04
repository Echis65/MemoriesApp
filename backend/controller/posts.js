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

export const createPost = ( req, res ) =>
{
    try
    {
        const post = req.body;
        post.status( 200 ).json( postDetails )
    } catch ( error )
    {

    }
}