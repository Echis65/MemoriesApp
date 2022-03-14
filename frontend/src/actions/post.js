import * as api from "../api"
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/ActionTypes"

export const getPosts = () => async ( dispatch ) =>
{
    try
    {

        const { data } = await api.fetchPosts()
        const action = {
            type: FETCH_ALL,
            payload: data
        }
        dispatch( action );

    } catch ( error )
    {
        console.log( error )
    }

}

export const createPost = ( post ) => async ( dispatch ) =>
{
    try
    {
        const { data } = await api.createPost( post )
        const action = {
            type: CREATE,
            payload: data
        }

        dispatch( action )

    } catch ( error )
    {
        console.log( error )
    }

}
export const updatedPost = (id, post) => async (dispatch) => {
    try {
        const{data} = await api.updatePost(id,post)
        const action = {
            type: UPDATE,
            payload: data
        }
        dispatch(action)
    } catch (error) {
       console.log(error) 
    }
}
export const deletePost = (id) => async (dispatch) => {
    await api.deletePost(id)
    try {
        const action = {
            type: DELETE,
            payload: id
        }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
    
}
export const updatedLikedPost = (id) => async (dispatch) => {
    const {data} = await api.likePost(id);
    try {
        const action = {
            type : UPDATE,
            payload : data
        }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}