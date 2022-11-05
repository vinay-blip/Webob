import express from "express"
import { addprivVideo, addVideo, deleteVideo, getPrivVideo, getVideo, updateVideo } from "../controllers/video.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router();

router.post("/",verifyToken,addVideo);
router.post("/",verifyToken,addprivVideo);
router.delete("/:id",verifyToken,deleteVideo);
router.put("/",verifyToken,updateVideo);
router.get("/find/:id",getVideo);
router.post("/find/:id",verifyToken,getPrivVideo);

export default router;