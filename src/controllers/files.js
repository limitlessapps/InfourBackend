const Image = require("../model/files");
// const fs = require("fs");

exports.create_profile_image = (req,res,next)=>{
    console.log(req.file)
    const image = new Image({
        profileImage:req.file.path
    });
    image.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            image:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
}

exports.get_profile_image = (req,res,next)=>{
    Image
    .find()
    .then(result =>{
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err =>{
        res.status(400).json({
            Error:err
        })
    })
}


//===============================================================> 
// upload image 
// exports.create_image = (req,res,next)=>{
//     let images = []
//     for (let i = 0; i < req.files.length; i++) {
//        images.push({
//            data: fs.readFileSync(req.files[i].path),
//            contentType: 'image/jpeg'
//        })
//    }

//    Image.insertMany(images,(err,result)=>{
//     if(err){ 
//         return res.status(404).json('image was not found')
//     }else{
//         console.log(images)
//         //remove files in upload folder
//         for (let i = 0; i < req.files.length; i++) {
//            fs.unlink(req.files[i].path, (err) => {
//                if (err) return console.log(err);
//                console.log('file deleted successfully');
//            })
//        }

//         res.status(200).json(result)
//     }
// })
// }
