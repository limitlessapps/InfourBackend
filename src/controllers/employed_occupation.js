const Employed = require("../model/employed_occupation");

exports.create_employed_occupation =(req,res,next)=>{
 const employed = new Employed({
    company_name:req.body.company_name,
    position:req.body.position,
    country:req.body.country,
    province:req.body.province,
    district:req.body.district,
    street:req.body.street

 });

 employed
 .save()
 .then(result=>{
     res.status(200).json(result)
 })
 .catch(err=>{
     res.status(400).json({
         error:err
     })
 })

}