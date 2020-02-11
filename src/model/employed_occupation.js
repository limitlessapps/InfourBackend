const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employed_Schema = new Schema({
    userId:{
        type:String
    },
    company_name:{
        type:String
    },
    position:{
        type:String
    },
    country:{
        type:String
    },
    province:{
        type:String
    },
    district:{
        type:String
    },
    street:{
          type:String
    }
});


const Employed = mongoose.model("Employed",employed_Schema);
module.exports = Employed;