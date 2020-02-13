const Employed = require("../model/employed_occupation");
const Validation = require("../validation/validation");
//========================================================create
exports.create_employed_occupation =async (req,res,next)=>{
    const {company_name,position,country,province,district,street} = req.body;
    const {userId} = req.tokenData
    const validationObject = {
        company_name,
        position,
        country,
        province,
        district,
        street
    }
    // validate 
    const {error } = Validation.onValidateEmployed(validationObject)
  if(error) return res.status(400).json({error:error.details[0].message});
  validationObject.userId =userId

 let employed = new Employed(validationObject);
 try {
     employed = await employed.save();
     res.status(201).json(employed)
 } catch (error) {
    res.status(400).json(error) 
 }

}

// get data by userId 
exports.get_One_employment = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
    Employed
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