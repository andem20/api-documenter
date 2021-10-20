const mongoose = require('mongoose');

const connectionString = process.env.NODE_ENV === 'test' ? 'mongodb://anders:1234@localhost:27017/test_api' : 'mongodb://anders:1234@database:27017/api';

async function mongoConnect() {
  await mongoose.connect(connectionString, { useNewUrlParser: true }).
    catch(error => console.log(error));
}

async function mongoDisconnect() {
  await mongoose.connection.close();
}

module.exports = { mongoConnect, mongoDisconnect };