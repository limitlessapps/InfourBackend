const Files = require("../model/files");
const config = require("../../config");

exports.create_files =(req,res,next)=>{

    const file = req.files.profile;
    config.cloudinary.uploader.upload(file.tempFilePath,function(err,result){
    const files = new Files({
       value: console.log("Result: ",result),
        profile:result.url
        });

 files
 .save()
 .then(result=>{
     res.status(200).json(result)
 })
 .catch(err=>{
     res.status(400).json({
         error:err
     });
 })

    });
 

}