const mongoose = require('mongoose');

const route = mongoose.Schema({
    Arrive: String,
    Destination: String
})

module.exports = mongoose.model('routes',route)