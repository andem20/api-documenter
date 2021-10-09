const mongoose = require('mongoose');

const apiSchema = mongoose.Schema({
    title: String,
    endpoints: [{
      requestType: String,
      endpoint: String,
      description: String,
      output: String
    }]
  });
  
module.exports = mongoose.model('apidocs', apiSchema);