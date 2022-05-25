import  mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    givenName : {type : String, required: true},
    familyName : {type : String, required: true},
    name : {type : String, required: true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    id : String
})

const usersModel = mongoose.model("usersModel", userSchema)

export default usersModel;