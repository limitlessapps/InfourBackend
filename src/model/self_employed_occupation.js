const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Self_employed_Schema = new Schema({
    userId:{
        type:String
    },
    business_type:{
        type:String
    },
    business_name:{
        type:String
    },
    tin_number:{
        type:Number
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


const Self_employed = mongoose.model("Self_employed",Self_employed_Schema);
module.exports = Self_employed;