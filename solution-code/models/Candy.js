var mongoose = require('mongoose');

var CandySchema = mongoose.Schema({
    name: String,
    color: String,
    company: String
});

module.exports = mongoose.model('Candy', CandySchema);
