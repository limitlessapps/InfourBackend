const Account = require('../model/account');
const Validation = require("../validation/validation")

exports.create_account = async (req,res,next)=>{
    const {
        first_name,
        middle_name,
        surname,
        date_of_birth,
        place_of_birth,
        sex,
        nationality,
        id_number,
        martial_status,
        country,
        province,
        district,
        cell,
        village,
        email,
        email_work,
        primary_number,
        secondary_number
    } = req.body;

    const validationObject = {
        first_name,
        middle_name,
        surname,
        date_of_birth,
        place_of_birth,
        sex,
        nationality,
        id_number,
        martial_status,
        country,
        province,
        district,
        cell,
        village,
        email,
        email_work,
        primary_number,
        secondary_number
    };

 const {userId}=req.tokenData
 // validate 
 const { error } = Validation.onValidateAccount(validationObject);
 if(error) return res.status(400).json({error:error.details[0].message});
 validationObject.userId = userId;
 // create 
let account = new Account(validationObject)
     try {
        account = await account.save();
        console.log(account)
        res.status(201).json(account)
     } catch (err) {
        res.status(400).json(err)  
     }
    
}
// get by specific userId ;
exports.get_One_account = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
    Account
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

   let _id = req.params.id;
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

