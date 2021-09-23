// const { Client } = require('pg');
const express = require('express');

const app = express();
const PORT = 8080;

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'api_documentation',
//     password: 'admin',
//     port: 5432,
//   });

// client.connect();

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
    // const query = `SELECT request.name, route.details, route.response_example FROM api_route AS route
    //               INNER JOIN request_type AS request ON route.request_type_id = request.id;`;

    // client.query(query, (err, result) => {
    //   if(result.rows) res.json(result.rows);
    // });

    res.send('It works!');
});

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});
