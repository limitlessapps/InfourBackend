const Self_employed = require("../model/self_employed_occupation");
const Validation = require("../validation/validation");
// ========================================================= create
exports.create_self_employed_occupation = async(req,res,next)=>{
    const {
        business_type,
        business_name,
        tin_number,
        country,
        province,
        district,
        street 
    }= req.body;
    const {userId} = req.tokenData
    const validationObject  = {
        business_type,
        business_name,
        tin_number,
        country,
        province,
        district,
        street
    }

    const {error}  = Validation.onValidateSelf_employed(validationObject);
    if(error) return res.status(400).json({error:error.details[0].message});
    validationObject.userId =userId;
 let self_employed = new Self_employed(validationObject);
 try {
     self_employed = await self_employed.save();
     res.status(201).json(self_employed);
 } catch (error) {
   res.status(400).json(error)  
 }
}

exports.get_One_self_employment = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
    Self_employed
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