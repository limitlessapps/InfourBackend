const Assets = require("../model/asset");
const Validation = require("../validation/validation")

//================================================create
exports.create_assets = async(req,res,next)=>{
    const { asset_name } = req.body
    const validationObject = {asset_name}
    const {userId} = req.tokenData;
    // validdate 
    const {error} = Validation.onValidateAssets(validationObject)
    if(error) return res.status(400).json({error:error.details[0].message});
    validationObject.userId = userId
    // create 
 let assets = new Assets(validationObject);
 try{
     assets = await assets.save();
     res.status(201).json(assets)
 }catch(err) {
     res.status(400).json(err)
 }

}
// get by single id
exports.get_One_asset = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
    Assets
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
exports.modify_assets = (req,res,next)=>{
    let body = {}
       if (req.body.asset_name ) {
           body["asset_name"] = req.body.asset_name
       }
      let _id = req.params.id;
      Assets.findOneAndUpdate({ _id }, body)
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
//=======================================================delete
exports.delete_assets = (req,res,next)=>{
    Assets.deleteOne({_id:req.params.id})
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