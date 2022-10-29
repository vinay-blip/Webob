import express from "express"
import mongoose  from "mongoose"
import dotenv from "dotenv"
import userRoutes from "../server/routes/users.js"
import commentRoutes from "../server/routes/comments.js"
import videoRoutes from "../server/routes/videos.js"
import authRoutes from "../server/routes/auth.js"
import cookieParser from "cookie-parser"

const app = express() 

dotenv.config();
const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB!");
    }).catch(err=>{
        throw err;
    })
} 

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);
app.use((err,req,res,next)=>{
    const status = res.status || 500;
    const message = res.message || "something went wrong!";
    return res.status(status).json({
        success : false,
        status : status,
        message: message
    })
})

app.listen(8800,()=>{
    connect();
    console.log("Connected to Server!");
});