const mongoose = require('mongoose');

const booking = mongoose.Schema({
    MobileNumber: Number,
    LastBooking: String,
    TotalBooking: Number 
})
module.exports = mongoose.model('bookings',booking)