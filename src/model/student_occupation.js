const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const student_Schema = new Schema( {
    school:{
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
    street:{
        type:String
    }
});


const Student = mongoose.model("Student",student_Schema);
module.exports = Student;