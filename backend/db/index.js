const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/triNIT');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    language:String,
    contact:Number,

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    contact:Number,
   
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    tutorname:String,
    title:String,
    language:String,
    description:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}