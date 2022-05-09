import * as api from "../api"
import { AUTH } from "../constants/ActionTypes"

export const signIn = (formData, history) => async (dispatch) =>{
try {
    history("/")
} catch (error) {
    console.log(error)
}
}

export const signUp = (formData, history) => async(dispatch) => {
    try {
        history("/")
    } catch (error) {
        console.log(error)
    }
}