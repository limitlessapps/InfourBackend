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





exports.delete_student_occupation = (req,res,next)=>{
      Student.deleteOne({_id:req.params.id})
    .then( deletedData=>{
        res.status(200).json({
            message:"data successfully deleted",
            data:deletedData
        })
    }).catch(
      error =>{
          res.status(400).json({
              error:error
          })
      }
  )
  }