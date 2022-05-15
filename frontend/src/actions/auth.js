import * as api from "../api"
import { AUTH } from "../constants/ActionTypes"

export const signIn = (formData, history) => async (dispatch) =>{
try {
    // get data from api
 const { data } = await api.signIn(formData);
 const action = {
     type : AUTH,
     payload : data
 }
     dispatch(action)
    history("/")
} catch (error) {
    console.log(error)
}
}

export const signUp = (formData, history) => async(dispatch) => {
    try {
      const { data } = await api.signUp(formData);
    const action = {
        type : AUTH,
        payload : data,
    }
      dispatch(action)
        history("/")
    } catch (error) {
        console.log({message : error})
    }
}