const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const studentSchema = {
//     school:{
//         type:String
//     },
//     country:{
//         type:String
//     },
//     province:{
//         type:String
//     },
//     district:{
//         type:String
//     },
//     street:{
//         type:String
//     }
// }
   
// const EmployedSchema = {
//     company_name:{
//         type:String
//     },
//     position:{
//         type:String
//     },
//     country:{
//         type:String
//     },
//     province:{
//         type:String
//     },
//     district:{
//         type:String
//     },
//     street:{
//         type:String
//     }
// }


// const Self_employed_Schema = {
//     business_type:{
//         type:String
//     },
//     business_name:{
//         type:String
//     },
//     tin_number:{
//         type:Number
//     },
//     country:{
//         type:String
//     },
//     province:{
//         type:String
//     },
//     district:{
//         type:String
//     },
//     street:{
//         type:String
//     }
// }


const occupationSchema = new Schema({
    student:{ type:Schema.Types.ObjectId, ref:"Student"},
    employed:[{ type:Schema.Types.ObjectId, ref:"Employed"}],
    self_employed:[{ type:Schema.Types.ObjectId, ref:"Self_employed"}],
    other:[String]

});


const Occupation = mongoose.model("Occupation",occupationSchema);
module.exports = Occupation;
