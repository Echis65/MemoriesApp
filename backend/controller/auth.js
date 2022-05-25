import usersModel from "../model/usersModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const signUp = async(req, res) => {
const { givenName, familyName, email, password, confirmPassword } = req.body;
try {
const existingUser = await usersModel.findOne({email});
    if(existingUser) return res.status(400).json({message : "User Already exist"})
    if(password !== confirmPassword) return res.status(400).json({message : "Password Mismatch"})
    const hashPassword = await bcrypt.hash(password, 12)
    const result = await usersModel.create({email , givenName, name:`${givenName} ${familyName}` ,familyName, password : hashPassword})
    const token = jwt.sign({email : result.email, id : result._id}, "test", {expiresIn : "1h"})
    res.status(200).json({result, token})
} catch (error) {
    res.status(500).json({message : "Try Again later"})
}
}

export const signIn = async(req, res) => {
    const { email, password }  = req.body;
    try {
        const existingUser = await usersModel.findOne({email})
        const validPassword = await bcrypt.compare(password, existingUser.password);
        if(!existingUser) return res.sendStatus(404).json({message : "User not found"});
        if(!validPassword) return res.sendStatus(401).json({message : "Invalid Password"})
        const token = jwt.sign({email : existingUser.email, id : existingUser._id},"test", {expiresIn: "1h"})
        res.status(200).json({result : existingUser, token})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}