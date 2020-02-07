const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankSchema = new Schema({
    bank_name:{
        type:[String]
    }
});


const Bank = mongoose.model("Bank",bankSchema);

module.exports = Bank;