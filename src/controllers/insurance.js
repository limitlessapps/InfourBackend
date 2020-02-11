const Insurance = require("../model/insurance");
//================================================== create
exports.create_insurance =(req,res,next)=>{
    const {userId,email}=req.tokenData
 const insurance = new Insurance({
     userId,
    insurance_name:req.body.insurance_name,
    insurance_number:req.body.insurance_number,
    telephone:req.body.telephone,
    date_of_birth:req.body.date_of_birth,
    expiration_date:req.body.expiration_date
 });

 insurance
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
//========================================================== get specific
exports.get_One_Insurance = (req,res,next)=>{
    const {userId} = req.params;
    console.log(userId)
    Insurance
    .findOne({userId})
    .then( result=>{
        res.status(200).json(result)
    })
    .catch(error=>{
        res.status(400).json({
            error:error
        })
    })
 
}


//================================================== update
exports.modify_insurance = (req,res,next)=>{
    let body = {}
       if (req.body.insurance_name) {
           body["insurance_name"] = req.body.insurance_name
       }
       if (req.body.insurance_number ) {
           body["insurance_number"] = req.body.insurance_number
       }
       if (req.body.telephone ) {
        body["telephone"] = req.body.telephone
    }
    if (req.body.date_of_birth ) {
        body["date_of_birth"] = req.body.date_of_birth
    }
    if (req.body.expiration_date) {
        body["expiration_date"] = req.body.expiration_date
    }
      console.log(body)
      let _id = req.params.id;
      Insurance.findOneAndUpdate({ _id }, body)
      .then(result=>{
       res.status(200).json(result)
   })
   .catch(err=>{
       res.status(400).json({
           error:err
       })
   })
   }
//==================================================delete
exports.delete_insurance = (req,res,next)=>{
    Insurance.deleteOne({_id:req.params.id})
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