const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    profile:{
        type:String
    },
    national_id_file:{
        type:String
    },
    land_file:{
        type:String
    },
    marriage_certificate:{
        type:String
    },
    birth_certificate:{
        type:String
    },
    other_relevant_file:[String]
});


const Files = mongoose.model("Files",fileSchema);
module.exports = Files;