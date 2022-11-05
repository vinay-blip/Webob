 import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        unique : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
    },
    img : {
        type : String,
    },
    followers_num : {
        type : Number,
        default: 0,
    },
    following : {
        type : [String],
    },
    privateuploads : {
        type : [String],
        default : [],
    }
},{timestamps : true})

export default mongoose.model("User",UserSchema);