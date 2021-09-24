db = db.getSiblingDB('api');

db.createCollection('apidocs');

db.getCollection("apidocs").insertMany([
 {
    request_type: 'POST',
    endpoint: '/users/:id',
    description: 'This is some description of POST',
    output: '{test: "POST"}'
  },
  {
    request_type: 'GET',
    endpoint: '/users/:id',
    description: 'This is some description of GET',
    output: '{test: "GET"}'
  },
  {
    request_type: 'DELETE',
    endpoint: '/users/:id',
    description: 'This is some description of DELETE',
    output: '{test: "DELETE"}'
  }
]);