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



exports.delete_occupation_employed = (req,res,next)=>{
    Employed.deleteOne({_id:req.params.id})
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