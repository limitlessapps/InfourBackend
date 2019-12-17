const Occupation = require("../model/occupation");

exports.create_occupation =(req,res,next)=>{
 const occupation = new Occupation({
    student:req.body.student,
    employed:req.body.employed,
    self_employed:req.body.self_employed,
    other:req.body.other
 });

 occupation
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




exports.delete_occupation = (req,res,next)=>{
    Occupation.deleteOne({_id:req.params.id})
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