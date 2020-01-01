const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const occupationSchema = new Schema({
    student:{ type:Schema.Types.ObjectId, ref:"Student"},
    employed:[{ type:Schema.Types.ObjectId, ref:"Employed"}],
    self_employed:[{ type:Schema.Types.ObjectId, ref:"Self_employed"}],
    other:[String]

});


const Occupation = mongoose.model("Occupation",occupationSchema);
module.exports = Occupation;
