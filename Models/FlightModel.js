const mongoose = require('mongoose');

const flight = mongoose.Schema({
    FlightName: String,
    Owner: String,
    Route:[{type: mongoose.Schema.Types.ObjectId , ref:'routes'}],
    Timings:[{type: mongoose.Schema.Types.ObjectId , ref:'timings'}]
})

module.exports = mongoose.model('flights',flight)