const Student = require("../model/student_occupation");
const Validation = require("../validation/validation");
//==========================================================create
exports.create_Student_occupation =async (req,res,next)=>{
    const {school,country,province,district,street}= req.body
    const {userId} = req.tokenData
    const validationObject = {
        school,
        country,
        province,
        district,
        street
    }
// validate
const { error } = Validation.onValidateStudent(validationObject);
if(error) return res.status(400).json({error:error.details[0].message});
  validationObject.userId =userId
 let student = new Student(validationObject);
 console.log(student)
 try {
     student = await student.save();
     res.status(201).json(student);
 } catch (error) {
     res.status(400).json(error);
 }

}

exports.get_One_student = (req,res,next)=>{
    let id=req.tokenData? req.tokenData.userId : req.params.userId;
    const userId=id;
    Student
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
//======================================================= update
exports.modify_Student_occupation = (req,res,next)=>{
    let body = {}
       if (req.body.school) {
           body["school"] = req.body.school
       }
       if (req.body.country) {
           body["country"] = req.body.country
       }
       if (req.body.province ) {
        body["province"] = req.body.province
    }
    if (req.body.district) {
        body["district"] = req.body.district
    }
    if (req.body.street) {
        body["street"] = req.body.street
    }
      let _id = req.params.id;
      Student.findOneAndUpdate({ _id }, body)
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
//=================================================== delete
exports.delete_student_occupation = (req,res,next)=>{
      Student.deleteOne({_id:req.params.id})
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