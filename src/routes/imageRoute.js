const express = require("express");
const router = express.Router();
const multer = require("multer");
const ImageController = require("../controllers/files");

// ================================ upload image 
// Store image
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads");
    },
    filename:function(req,file,cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
});

// filter image 
const fileFilter = (req,file,cb)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === 'image/png'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

// upload image 
const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024 * 1024 * 5
    },
    fileFilter:fileFilter
});

//========================================= routes
router.post("/",upload.single('profileImage'),ImageController.create_profile_image);
router.get("/",ImageController.get_profile_image);

module.exports = router