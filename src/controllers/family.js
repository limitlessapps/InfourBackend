const Family = require("../model/family");
const Validation = require("../validation/validation");
// ==============================================create

exports.create_family = async (req,res,next)=>{
    const {
        father_firstName,
        father_surname,
        mother_firstName,
        mother_SurName,
        spouse_firstName,
        spouse_Surname,
        spouseId,
        spouseTelephone,
        children,
        Dependency
    } = req.body
   const validationObject = {
    father_firstName,
    father_surname,
    mother_firstName,
    mother_SurName,
    spouse_firstName,
    spouse_Surname,
    spouseId,
    spouseTelephone,
    children,
    Dependency
   }
const {userId}=req.tokenData
const {error } = Validation.onValidateFamily(validationObject);
if(error) return res.status(400).json({error:error.details[0].message});
validationObject.userId =userId;
 let family = new Family(validationObject);
      try {
          family = await family.save();
          res.status(201).json(family)
      } catch (error) {
        res.status(400) .json(error) 
      }
}

//========================================================== get specific
exports.get_One_family = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id
    Family
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
exports.modify_family = (req,res,next)=>{
    let body = {}
       if (req.body.father_firstName ) {
           body["father_firstName"] = req.body.father_firstName
       }
       if (req.body.father_surname ) {
           body["father_surname"] = req.body.father_surname
       }
       if (req.body.mother_firstName ) {
        body["mother_firstName"] = req.body.mother_firstName
    }
    if (req.body.mother_SurName ) {
        body["mother_SurName"] = req.body.mother_SurName
    }
    if (req.body.spouse_firsName ) {
        body["spouse_firsName"] = req.body.spouse_firsName
    }
    if (req.body.spouse_Surname ) {
        body["spouse_Surname"] = req.body.spouse_Surname
    }
    if (req.body.spouseId ) {
        body["spouseId"] = req.body.spouseId
    }
    if (req.body.spouseTelephone ) {
        body["spouseTelephone"] = req.body.spouseTelephone
    }
    if (req.body.children) {
        body["children"] = req.body.children
    }
    if (req.body.Dependency ) {
        body["Dependency"] = req.body.Dependency
    }
      console.log(body)
      let _id = req.params.id;
      console.log(_id)
      Family.findOneAndUpdate({ _id }, body)
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
//==================================================delete
exports.delete_family = (req,res,next)=>{
    Family.deleteOne({_id:req.params.id})
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
      })
  }