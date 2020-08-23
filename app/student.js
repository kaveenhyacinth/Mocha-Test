// import mongoose
const mongoose = require('mongoose');

// init schema
const Schema = mongoose.Schema;

// define schema
const StudentSchema = new Schema({
    name: String
});

// implement schema in the model
const Student = mongoose.model('students', StudentSchema);

// export model
module.exports = Student;
