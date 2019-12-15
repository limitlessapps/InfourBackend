const Social_media = require("../model/social_media");

exports.create_social_media =(req,res,next)=>{
 const social_media = new Social_media({
    twitter:req.body.twitter,
    facebook:req.body.facebook,
    instagram:req.body.instagram,
    linkedin:req.body.linkedIn,
    whatsup_number:req.body.whatsUp_number
 });

 social_media
 .save()
 .then(result=>{
     res.status(200).json(result)
 })
 .catch(err=>{
     res.status(400).json({
         error:err
     });
 })

}