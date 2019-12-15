const Student = require("../model/student_occupation");

exports.create_Student_occupation =(req,res,next)=>{
 const student = new Student({
    school:req.body.school,
    country:req.body.country,
    province:req.body.province,
    district:req.body.district,
    street:req.body.street

 });

 student
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