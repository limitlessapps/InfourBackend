const Assets = require("../model/asset");

//================================================create
exports.create_assets =(req,res,next)=>{
    const {userId} = req.tokenData;
 const assets = new Assets({
       userId,
       asset_name:req.body.asset_name,
 });
 assets
 .save()
 .then(result=>{
     res.status(200).json(result)
 })
 .catch(err=>{
     res.status(400).json({
         error:err
     });
 })

}
// get by single id
exports.get_One_asset = (req,res,next)=>{
    const {userId} = req.params;
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