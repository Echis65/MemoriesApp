import * as api from "../api"

export const getPosts = () => async ( dispatch ) =>
{
    try
    {

        const { data } = await api.fetchPosts()
        const action = {
            type: "FETCH_ALL",
            payload: data
        }
        dispatch( action );

    } catch ( error )
    {
        console.log( error.message )
    }

}

export const createPost = ( post ) => async ( dispatch ) =>
{
    try
    {
        const { data } = await api.createPost( post )
        const action = {
            type: "CREATE",
            payload: data
        }

        dispatch( action )

    } catch ( error )
    {
        console.log( error.message )
    }

}
export const updatedPost = (id, post) => async (dispatch) => {
    try {
        const{data} = await api.updatePost(id,post)
        const action = {
            type:"UPDATE",
            payload: data
        }
        dispatch(action)
    } catch (error) {
       console.log(error) 
    }
}