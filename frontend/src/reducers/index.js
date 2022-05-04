import { combineReducers } from "redux";
import post from "./post.js"
import authReducer from "./auth"
export default combineReducers( { post, authReducer } )