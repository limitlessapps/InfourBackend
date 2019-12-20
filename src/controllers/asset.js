const Assets = require("../model/asset");

//================================================create
exports.create_assets =(req,res,next)=>{
 const assets = new Assets({
       asset_name:req.body.asset_name,
       building:req.body.building,
       country:req.body.country,
       province:req.body.province,
       district:req.body.district,
       street:req.body.street
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
//================================================== update
exports.modify_assets = (req,res,next)=>{
    let body = {}
       if (req.body.asset_name ) {
           body["asset_name"] = req.body.asset_name
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