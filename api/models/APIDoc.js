const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const APISchema = new Schema({
    title: String,
    endpoints: [{
      requestType: String,
      endpoint: String,
      description: String,
      output: String
    }]
  });
  

module.exports = mongoose.model('apidocs', APISchema);