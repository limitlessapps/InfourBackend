const Account = require('../model/account');


exports.create_account = (req,res,next)=>{

 const account = new Account({
   first_name:req.body.first_name,
   middle_name:req.body.middle_name,
   surname:req.body.surname,
   date_of_birth:req.body.date_of_birth,
   place_of_birth:req.body.place_of_birth,
   sex:req.body.sex,
   nationality:req.body.nationality,
   id_number:req.body.id_number,
   martial_status:req.body.martial_status,
   country:req.body.country,
   province:req.body.province,
   district:req.body.district,
   cell:req.body.cell,
   village:req.body.village,
   email:req.body.email,
   email_work:req.body.email_work,
   primary_number:req.body.primary_number,
   secondary_number:req.body.secondary_number,
   family:req.body.family,
   occupation:req.body.occupation,
   insurance:req.body.insurance,
   bank:req.body.bank,
   assets:req.body.assets,
   social_media:req.body.social_media,
   file_upload:req.body.file_upload,
   relative:req.body.relative,
    });

    account
    .save()
    .then(result =>{
        res.status(200).json(result)
    })
    .catch(err =>{
        res.status(400).json({
            error:err
        })
    })
}


exports.get_account = (req,res,next)=>{
    Account
    .find()
    .populate("family")
    .populate("occupation")
    .populate("insurance")
    .populate("bank")
    .populate("assets")
    .populate("social_media")
    .populate("file_upload")
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(error=>{
        res.status(400).json({
            error:error
        })
    })

}



exports.modify_account = (req,res,next)=>{
    const account = new Account({
        _id:req.params.id,
        first_name:req.body.first_name,
        middle_name:req.body.middle_name,
        surname:req.body.surname,
        date_of_birth:req.body.date_of_birth,
        place_of_birth:req.body.place_of_birth,
        sex:req.body.sex,
        nationality:req.body.nationality,
        id_number:req.body.id_number,
        martial_status:req.body.martial_status,
        country:req.body.country,
        province:req.body.province,
        district:req.body.district,
        cell:req.body.cell,
        village:req.body.village,
        email:req.body.email,
        email_work:req.body.email_work,
        primary_number:req.body.primary_number,
        secondary_number:req.body.secondary_number,
        family:req.body.family,
        occupation:req.body.occupation,
        insurance:req.body.insurance,
        bank:req.body.bank,
        assets:req.body.assets,
        social_media:req.body.social_media,
        file_upload:req.body.file_upload,
        relative:req.body.relative,
        });
         Account.updateOne({_id:req.params.id,account})
         .then(result=>{
             res.status(200).json({
                 result:result,
                 consoleResult:console.log(result)
             })
         })
         .catch(err=>{
             res.status(400).json({
                 error:err
             })
         })
}



exports.delete_account = (req,res,next)=>{
    Account.deleteOne({_id:req.params.id})
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