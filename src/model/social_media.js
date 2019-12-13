const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const social_mediaSchema = new Schema({
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


const Social_Media = mongoose.model("Files",social_mediaSchema);
module.exports = Social_Media;