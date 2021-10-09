const express = require('express');
const routes = require('./routes/routes');

const app = express();
const PORT = 8080;
const URL = '/api/v1/';

// Middleware
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.use(URL, routes);

require('./config/db');

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});
