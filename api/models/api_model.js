const mongoose = require('../config/db');

const apiSchema = new mongoose.Schema({
    apiTitle: String,
    endpoints: [{
      requestType: String,
      endpoint: String,
      description: String,
      output: String
    }]
  });
  
const Api = mongoose.model('apidocs', apiSchema);

module.exports = { Api };