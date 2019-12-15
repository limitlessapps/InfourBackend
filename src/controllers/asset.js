const Assets = require("../model/asset");

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