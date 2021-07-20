const mongoose = require('mongoose');

const timing = mongoose.Schema({
    ArrivalTime: String,
    DepartureTime: String,
})

module.exports = mongoose.model('timings',timing)