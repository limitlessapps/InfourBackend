const Family = require("../model/family");

exports.create_family =(req,res,next)=>{
 const family = new Family({
    father_firstName:req.body.father_firstName,
    father_surname:req.body.father_surname,
    mother_firstName:req.body.mother_firstName,
    mother_SurName:req.body.mother_SurName,
    spouse_firsName:req.body.spouse_firsName,
    spouse_Surname:req.body.spouse_Surname,
    spouseId:req.body.spouseId,
    spouseTelephone:req.body.spouseTelephone,
    children:req.body.children,
    Dependency:req.body.Dependency
 });

 family
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