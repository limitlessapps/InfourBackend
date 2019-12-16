
// file handling without the databases
const config = require("../../config")
exports.uploadFile = (req,res,next)=>{
    const file = req.files.photo;
    console.log(file);
    config.cloudinary.uploader.upload(file.tempFilePath,function(err,result){
    console.log("Error: ",err);
    console.log("Result: ",result);
    res.send({
        success:true,
        imageURL:result.url
    })
    });

}