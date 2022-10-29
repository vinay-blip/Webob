import express from "express"
import { update,deleteUser,like,dislike } from "../controllers/user.js"

const router = express.Router();

//delete an user
router.delete("/:id",deleteUser);

//get an user
router.get("/find/:id",update);

//like a video
router.put("/like/:videoId",like);

//dislike a video
router.put("/dislike/:videoId",dislike); 

export default router;