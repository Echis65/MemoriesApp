import usersModel from "../model/usersModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const signUp = async(req, res) => {
    const {firstName, lastName, email, password, confirmPassword } = req.body
try {
    const existingUser = usersModel.findOne(email);
    if(existingUser) return res.status(400).json("User Already exist")
    if(password !== confirmPassword) return res.status(400).json("Passwords do not match")
    const hashedPassword = bcrypt.hash(password, 12)
    const result = usersModel.create({email, password : hashedPassword, firstName, lastName})
    const token = jwt.sign({email : result.email, id: result._id}, "test", {expiresIn : "1h"})
    res.status(200).json(result, token)
} catch (error) {
    res.status(500).json({message : error.message})
}
}

export const signIn = async(req, res) => {
    const { email, password }  = req.body;
    try {
        const existingUser = await usersModel.findOne(email)
        const validPassword = await bcrypt.compare(password, existingUser.password);
        if(!existingUser) return res.send(404).json({message : "User not found"});
        if(!validPassword) return res.send(401).json({message : "Invalid Password"})
        const token = jwt.sign({email : existingUser.email, id : existingUser._id},"test", {expiresIn: "1h"})
        res.status(200).json({result : existingUser, token})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}