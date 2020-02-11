const Self_employed = require("../model/self_employed_occupation");
// ========================================================= create
exports.create_self_employed_occupation =(req,res,next)=>{
    const {userId} = req.tokenData
 const self_employed = new Self_employed({
      userId,
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
//================================================== update
exports.modify_self_employed_occupation = (req,res,next)=>{
    let body = {}
       if (req.body.business_type) {
           body["business_type"] = req.body.business_type
       }
       if (req.body.business_name ) {
           body["business_name"] = req.body.business_name
       }
       if (req.body.telephone ) {
        body["tin_number"] = req.body.tin_number
    }
    if (req.body.country) {
        body["country"] = req.body.country
    }
    if (req.body.province) {
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
      Self_employed.findOneAndUpdate({ _id }, body)
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
//==================================================================delete
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