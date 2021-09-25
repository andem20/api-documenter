const mongoose = require('mongoose');

mongoose.connect('mongodb://database:27017/api');

module.exports = mongoose;