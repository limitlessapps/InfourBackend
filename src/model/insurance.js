const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
       insurance_name:{
           type:String
       },
       insurance_number:{
           type:Number
       },
       telephone:{
           type:String
       },
       date_of_birth:{
           type:Date
       },
       expiration_date:{
           type:Date
       }
});


const Insurance = mongoose.model("Insurance",insuranceSchema);
module.exports = Insurance;