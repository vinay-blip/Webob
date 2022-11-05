import express from "express"
import { update,deleteUser,getUser,follow, unfollow,like,dislike } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update a user
router.put("/:id",verifyToken, update);

//delete an user
router.delete("/:id",verifyToken, deleteUser);

//get an user
router.get("/find/:id",getUser);

//follow an user
router.put("/follow/:id",verifyToken, follow);

//unfollow an user
router.put("/unfollow/:id",verifyToken, unfollow); 

//like a video
router.put("/like/:videoId",verifyToken,like);

//dislike a video
router.put("/dislike/:videoId",verifyToken, dislike); 

export default router;