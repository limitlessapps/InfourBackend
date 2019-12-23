const Image = require("../model/files");
const config = require("../../config");

//===============================================================> cludinary upload 
// exports.create_files =(req,res,next)=>{

//     const file = req.files.profile;
//     config.cloudinary.uploader.upload(file.tempFilePath,function(err,result){
//     const files = new Files({
//        value: console.log("Result: ",result),
//         profile:result.url
//         });

//  files
//  .save()
//  .then(result=>{
//      res.status(200).json(result)
//  })
//  .catch(err=>{
//      res.status(400).json({
//          error:err
//      });
//  })

//     });

// }


// upload image 
exports.create_image = (req,res,next)=>{
    const images = req.files.map(file=>{
        console.log(req.files)
        return {
            filename:file.filename,
            originalname:file.originalname
        }
    })
    console.log(images)
    Image.insertMany(images,(err,result)=>{
        if(err){
            return res.status(404).json('image was not found')
        }else{
            res.status(200).json(result)
        }
    })
}
// get image with id ;
exports.get_image = (req,res,next)=>{
    Image.findOne({_id:req.params.id},(err,image)=>{
        if(err){
            return res.status(404).json('image was not found')
        }else{
            res.status(200).json(image)
        } 
    })
}