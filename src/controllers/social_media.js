const Social_media = require("../model/social_media");
const Validation = require("../validation/validation");
// ========================================================= create
exports.create_social_media =async(req,res,next)=>{
    const {
        twitter,
        facebook,
        instagram,
        linkedin,
        whatsup_number
    } = req.body;
    const {userId} = req.tokenData
   const validationObject = {
    twitter,
    facebook,
     instagram,
    linkedin,
    whatsup_number
   }
   const {error} = Validation.onValidateSocial_media(validationObject);
   if(error) return res.status(400).json({error:error.details[0].message});
   validationObject.userId =userId;
 let social_media = new Social_media(validationObject);
  try {
      social_media = await social_media.save();
      res.status(201).json(social_media)
  } catch (error) {
     res.status(400).json(error) 
  }

}
//========================================================== get

exports.get_One_social_media = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
    Social_media
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
exports.modify_social_media = (req,res,next)=>{
    let body = {}
       if (req.body.twitter) {
           body["twitter"] = req.body.twitter
       }
       if (req.body.facebook) {
           body["facebook"] = req.body.facebook
       }
       if (req.body.instagram ) {
        body["instagram"] = req.body.instagram
    }
    if (req.body.linkedin) {
        body["linkedin"] = req.body.linkedin
    }
    if (req.body.whatsup_number) {
        body["whatsup_number"] = req.body.whatsup_number
    }
      console.log(body)
      let _id = req.params.id;
      console.log(_id)
      Social_media.findOneAndUpdate({ _id }, body)
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
//==================================================== delete
exports.delete_social_media = (req,res,next)=>{
    Social_media.deleteOne({_id:req.params.id})
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