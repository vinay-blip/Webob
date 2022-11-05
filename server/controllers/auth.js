import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import User from "../models/User.js"
import { createError } from "../error.js"
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });
      //  console.log(newUser)
        await newUser.save();
        res.status(200).send("user has been created!")
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res,next) => {
    try {
        const user = User.findOne(req.body.name);
        if(!user) return next(createError(404,"user not found!"));

        const isCorrect = await bcrypt.compare(req.body.password,user.password);

        if(!isCorrect) return next(createError(400,"wrong username or password!"));

        const token = jwt.sign({id:user._id}, process.env.JWT);

        const {password, ...others} = user._doc;
        res.cookie("Accec_token",token,{
            httpOnly:true
        }).status(200).json(others);
    } catch (err) {
        next(err);
    }
}