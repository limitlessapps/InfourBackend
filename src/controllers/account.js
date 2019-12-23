const Account = require('../model/account');
//============================================== create
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
//========================================================== get
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
//=========================================================== update
exports.modify_account = (req,res,next)=>{
 let body = {}
    if (req.body.first_name ) {
        body["first_name"] = req.body.first_name
    }
    if (req.body.middle_name ) {
        body["middle_name"] = req.body.middle_name
    }
    if (req.body.surname ) {
        body["surname"] = req.body.surname
    }
    if (req.body.date_of_birth ) {
        body["date_of_birth"] = req.body.date_of_birth
    }
    if (req.body.place_of_birth ) {
        body["place_of_birth"] = req.body.place_of_birth
    }
    if (req.body.sex ) {
        body["sex"] = req.body.sex
    }
    if (req.body.nationality ) {
        body["nationality"] = req.body.nationality
    }
    if (req.body.id_number ) {
        body["id_number"] = req.body.id_number
    }
    if (req.body.first_name ) {
        body["first_name"] = req.body.first_name
    }
    if (req.body.martial_status ) {
        body["martial_status"] = req.body.martial_status
    }
     if(req.body.country ) {
        body["country"] = req.body.country
    }
    if (req.body.province ) {
        body["province"] = req.body.province
    }
    if (req.body.district ) {
        body["district"] = req.body.district
    }

    if (req.body.village ) {
        body["village"] = req.body.village
    }
    if (req.body.email ) {
        body["email"] = req.body.email
    }
    if (req.body.email_work ) {
        body["email_work"] = req.body.email_work
    }
    if (req.body.primary_number ) {
        body["primary_number"] = req.body.primary_number
    }
    if (req.body.secondary_number ) {
        body["secondary_number"] = req.body.secondary_number
    }
    if (req.body.primary_number ) {
        body["primary_number"] = req.body.primary_number
    }
  
   console.log(body)
   let _id = req.params.id;
   console.log(_id)
   Account.findOneAndUpdate({ _id }, body)
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
//============================================== delete
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

