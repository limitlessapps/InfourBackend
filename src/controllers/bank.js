const Bank = require("../model/bank");

exports.create_bank_name =(req,res,next)=>{
 const bank = new Bank({
    bank_name:req.body.bank_name,

 });

 bank
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



exports.delete_bank = (req,res,next)=>{
        Bank.deleteOne({_id:req.params.id})
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