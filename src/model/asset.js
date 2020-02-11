const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    userId:{
        type:String
    },
    asset_name:{
        type:[String]
    }
});


const Assets = mongoose.model("Assets",assetSchema);
module.exports = Assets;