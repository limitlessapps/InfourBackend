const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Image = new Schema({
    profileImage:{
        type:Buffer, 
        contentType: String
    }
})

module.exports = mongoose.model('Image', Image)