const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

mongoose.connect('mongodb://database:27017/api');

const apiSchema = new mongoose.Schema({
  request_type: String,
  endpoint: String,
  description: String,
  output: String
});

const Api = mongoose.model('apidocs', apiSchema);


app.get('/', (req, res) => {
  Api.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});
