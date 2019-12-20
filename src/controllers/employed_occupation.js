const Employed = require("../model/employed_occupation");
//========================================================create
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
//================================================== update
exports.modify_employed_occupation = (req,res,next)=>{
    let body = {}
       if (req.body.company_name ) {
           body["company_name"] = req.body.company_name
       }
       if (req.body.position ) {
           body["position"] = req.body.position
       }
       if (req.body.country ) {
        body["country"] = req.body.country
    }
    if (req.body.province ) {
        body["province"] = req.body.province
    }
    if (req.body.district ) {
        body["district"] = req.body.district
    }
    if (req.body.street ) {
        body["street"] = req.body.street
    }
      console.log(body)
      let _id = req.params.id;
      console.log(_id)
      Employed.findOneAndUpdate({ _id }, body)
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