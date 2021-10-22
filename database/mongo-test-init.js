db = new Mongo().getDB('test_api');

db.createUser({
  user: 'anders',
  pwd: '1234',
  roles: [
    {
        role: 'readWrite',
        db: 'test_api',
    },
  ],
});

db.createCollection('apidocs');
