const Occupation = require("../model/occupation");
//============================================== create 
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
//================================================== update
exports.modify_occupation = (req,res,next)=>{
    let body = {}
       if (req.body.other) {
           body["other"] = req.body.other
       }
      console.log(body)
      let _id = req.params.id;
      console.log(_id)
      Occupation.findOneAndUpdate({ _id }, body)
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
//================================================ delete
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