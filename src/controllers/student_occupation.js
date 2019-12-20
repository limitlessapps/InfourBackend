const Student = require("../model/student_occupation");
//==========================================================create
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
//======================================================= update
exports.modify_Student_occupation = (req,res,next)=>{
    let body = {}
       if (req.body.school) {
           body["school"] = req.body.school
       }
       if (req.body.country) {
           body["country"] = req.body.country
       }
       if (req.body.province ) {
        body["province"] = req.body.province
    }
    if (req.body.district) {
        body["district"] = req.body.district
    }
    if (req.body.street) {
        body["street"] = req.body.street
    }
      console.log(body)
      let _id = req.params.id;
      console.log(_id)
      Social_media.findOneAndUpdate({ _id }, body)
      .then(result=>{
          console.log(body)
       res.status(200).json(result)
   })
   .catch(err=>{
       res.status(400).json({
           error:err
       })
   })
   }
//=================================================== delete
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