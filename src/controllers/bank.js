const Bank = require("../model/bank");
//============================================create
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

//================================================== update
exports.modify_bank_name = (req,res,next)=>{
    let body = {}
       if (req.body.bank_name ) {
           body["bank_name"] = req.body.bank_name
       }
      console.log(body)
      let _id = req.params.id;
      console.log(_id)
      Bank.findOneAndUpdate({ _id }, body)
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
//==============================================delete
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