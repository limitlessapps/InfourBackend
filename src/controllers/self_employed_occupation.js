const Self_employed = require("../model/self_employed_occupation");

exports.create_self_employed_occupation =(req,res,next)=>{
 const self_employed = new Self_employed({
       business_type:req.body.business_type,
       business_name:req.body.business_name,
       tin_number:req.body.tin_number,
       country:req.body.country,
       province:req.body.province,
       district:req.body.district,
       street:req.body.street

 });

 self_employed
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


exports.delete_occupation_self_employed = (req,res,next)=>{
    Self_employed.deleteOne({_id:req.params.id})
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