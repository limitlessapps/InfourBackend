const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema = new Schema({
    father_firstName:{
        type:String
    },
    father_surname:{
        type:String
    },
    mother_firstName:{
        type:String
    },
    mother_SurName:{
        type:String
    },
    spouse_firsName:{
        type:String
    },
    spouse_Surname:{
        type:String
    },
    spouseId:{
        type:Number
    },
    spouseTelephone:{
        type:String
    },
    children:{
        type:[String]
    },
    userId:{
        type:String,
    },
    Dependency:{
        type:String
    }

});


const Family = mongoose.model("Family",familySchema);
module.exports = Family;