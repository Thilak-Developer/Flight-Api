const mongoose = require('mongoose');

const user = mongoose.Schema({
    Name: String,
    Age: String,
    MobileNumber:Number 
})
module.exports = mongoose.model('users',user)