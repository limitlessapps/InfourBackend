const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankSchema = new Schema({
    bank_name:{
        type:String,
        enum:['yes','no']
    }
});


const Bank = mongoose.model("Bank",bankSchema);
module.exports = Bank