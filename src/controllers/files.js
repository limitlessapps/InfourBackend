const Files = require("../model/files");

exports.create_files =(req,res,next)=>{
 const files = new Files({
       profile:req.body.profile,
       national_id_files:req.body.national_id_files,
       land_file:req.body.land_file,
       marriage_file:req.body.marriage_file,
       birth_certificate:req.body.birth_certificate,
       other_relevant_files:req.body.other_relevant_files
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

}