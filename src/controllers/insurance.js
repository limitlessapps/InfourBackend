const Insurance = require("../model/insurance");

exports.create_insurance =(req,res,next)=>{
 const insurance = new Insurance({
    insurance_name:req.body.insurance_name,
    insurance_number:req.body.insurance_number,
    telephone:req.body.telephone,
    date_of_birth:req.body.date_of_birth,
    expiration_date:req.body.expiration_date

 });

 insurance
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