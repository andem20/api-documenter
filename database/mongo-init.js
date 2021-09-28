db = db.getSiblingDB('api');

db.createCollection('apidocs');

db.getCollection("apidocs").insertMany([
  {
    apiTitle: 'Skill-Tracker',
    endpoints: [
      {
        requestType: 'POST',
        endpoint: '/users/:id',
        description: 'This is some description of POST',
        output: '{test: "POST"}'
      },
      {
        requestType: 'GET',
        endpoint: '/users/:id',
        description: 'This is some description of GET',
        output: '{test: "GET"}'
      },
      {
        requestType: 'DELETE',
        endpoint: '/users/:id',
        description: 'This is some description of DELETE',
        output: '{test: "DELETE"}'
      }
    ]
  },
  {
    apiTitle: 'Some Other API',
    endpoints: [
      {
        requestType: 'POST',
        endpoint: '/something/:id',
        description: 'This is some description of POST',
        output: '{test: "POST"}'
      },
      {
        requestType: 'GET',
        endpoint: '/something/:id',
        description: 'This is some description of GET',
        output: '{test: "GET"}'
      },
      {
        requestType: 'DELETE',
        endpoint: '/something/somethingElse/:id',
        description: 'This is some description of DELETE',
        output: '{test: "DELETE"}'
      }
    ]
  },
  {
    apiTitle: 'Some Other API again',
    endpoints: [
      {
        requestType: 'POST',
        endpoint: '/something/:id',
        description: 'This is some description of POST',
        output: '{test: "POST"}'
      },
      {
        requestType: 'GET',
        endpoint: '/something/:id',
        description: 'This is some description of GET',
        output: '{test: "GET"}'
      },
      {
        requestType: 'DELETE',
        endpoint: '/something/somethingElse/:id',
        description: 'This is some description of DELETE',
        output: '{test: "DELETE"}'
      }
    ]
  }
]);