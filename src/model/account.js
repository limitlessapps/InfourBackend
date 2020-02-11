const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    first_name:{
        type:String
    },
    middle_name:{
        type:String
    },
    surname:{
        type:String
    },
    date_of_birth:{
        type:Date
    },
    place_of_birth:{
        type:String
    },
    sex:{
        type:String,
        enum:["male","female"]
    },
    nationality:{
        type:String
    },
    id_number:{
        type:Number
    },
    martial_status:{
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
    cell:{
        type:String
    },
    village:{
        type:String
    },
    email:{
        type:String
    },
    email_work:{
        type:String
    },
    primary_number:{
        type:String
    },
    secondary_number:{
        type:String
    },
    userId:{
        type:String
    }
    // family:{ type: Schema.Types.ObjectId, ref: 'Family' },
    // occupation:{ type: Schema.Types.ObjectId, ref: 'Occupation' },
    // insurance:{ type: Schema.Types.ObjectId, ref: 'Insurance' },
    // bank:{ type: Schema.Types.ObjectId, ref: 'Bank' },
    // assets:{ type: Schema.Types.ObjectId, ref:'Assets' },
    // social_media:{ type: Schema.Types.ObjectId, ref: 'Social_media' },
    // file_upload:{ type: Schema.Types.ObjectId, ref: 'Image' },
    // relative:{type:Schema.Types.ObjectId, ref:" Person"}
});


const Account = mongoose.model("Account",accountSchema);
module.exports = Account;