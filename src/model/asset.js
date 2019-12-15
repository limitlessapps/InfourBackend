const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    asset_name:{
        type:[String]
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


const Assets = mongoose.model("Assets",assetSchema);
module.exports = Assets;