const Insurance = require("../model/insurance");
const Validation = require("../validation/validation")
//================================================== create
exports.create_insurance = async (req,res,next)=>{
    const {insurance_name,insurance_number,telephone,date_of_birth,expiration_date} = req.body
    const validationObject ={
        insurance_name,
        insurance_number,
        telephone,
        date_of_birth,
        expiration_date
    }
 const {userId}=req.tokenData
 const {error} = Validation.onValidateInsurance(validationObject);
 if(error) return res.status(400).json({error:error.details[0].message});
 validationObject.userId = userId
 let insurance = new Insurance(validationObject);
   try {
        insurance = await insurance.save();
       res.status(201).json(insurance);
   } catch (error) {
    res.status(400).json(err) 
   }

}
//========================================================== get specific
exports.get_One_Insurance = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
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