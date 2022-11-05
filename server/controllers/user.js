import { createError } from "../error.js"
import User from "../models/User.js"

export const update = async (req,res,next)=>{
    if(req.user.id === req.params.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err);
        } 

    }else{
        return next(createError(403,"you can update only your account!"));
    }
}
export const deleteUser = async (req,res,next)=>{
    if(req.user.id === req.params.id){
        try {
            const updatedUser = await User.findByIdAndDelete(req.params.id,);
            res.status(200).json("user has been deleted!")
        } catch (err) {
            next(err);
        } 

    }else{
        return next(createError(403,"you can delete only your account!"));
    }
}
export const getUser = async (req,res,next)=>{
    try {
        const user = User.findById(req.params.id);
        res.status(200).json(user);     
    } catch (err) {
        next(err);
    }    
}
export const follow = async (req,res,next)=>{
    try {
        await User.findById(req.user.id,{
            $push:{following:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{followers_num:1}
        })
        res.status(200).json("followed successfully.")
    } catch (err) {
        next(err);
    }
}
export const unfollow = async (req,res,next)=>{
    try {
        await User.findById(req.user.id,{
            $pull:{following:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{followers_num:-1}
        })
        res.status(200).json("unfollowed successfully.")
    } catch (err) {
        next(err);
    }
}
export const like = async (req,res,next)=>{
    
}
export const dislike = async  (req,res,next)=>{
    
}