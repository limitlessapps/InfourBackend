const Bank = require("../model/bank");
const Validation = require("../validation/validation");
//============================================create
exports.create_bank_name = async (req,res,next)=>{
   const {bank_name} = req.body;
   const validationObject = {bank_name};
   const {userId} = req.tokenData;
   // validate 
  const {error } = Validation.onValidateBank(validationObject)
  if(error) return res.status(400).json({error:error.details[0].message});
  validationObject.userId =userId
 //create 
  let  bank = new Bank(validationObject);
   try {
       bank = await bank.save();
       res.status(201).json(bank)
   } catch (err) {
      res.status(400).json(err) 
   }

}

exports.get_One_bank = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
    Bank
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
exports.modify_bank_name = (req,res,next)=>{
    let body = {}
       if (req.body.bank_name ) {
           body["bank_name"] = req.body.bank_name
       }

      let _id = req.params.id;
      Bank.findOneAndUpdate({ _id }, body)
      .then(result=>{
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