const request = require('supertest');
const app = require('../app');
const APIDoc = require('../models/APIDoc');
const {mongoConnect, mongoDisconnect} = require('../config/db');
const testData = require('./testData');

process.env.NODE_ENV = 'test';

async function clearDatabase() {
  await APIDoc.deleteMany({});
  await APIDoc.insertMany(testData);
}

beforeAll(async () => {
  await mongoConnect();
});

afterAll(async () => {
  await mongoDisconnect();
});

afterEach(async () => {
  await clearDatabase();
});

describe('Integration tests', () => {
  describe('API documents', () =>  {
    test('/GET /apidocs/ --> all docs (id, title)', async () => {
      return await request(app).get('/api/v1/apidocs')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                _id: expect.any(String),
                title: expect.any(String),
              })]
            )
          )
        })
    });
  
    test('/GET /apidocs/:id --> apidoc with specified id', async () => {})
    test('/GET /apidocs/:id (invalid id) --> repond with 404 not found', async () => {})
    test('/POST /apidocs/ --> newly created apidoc', () => {})
    test('/PUT /apidocs/:id --> newly updated apidoc with specified id', () => {})
    test('/DELETE /apidocs/:id --> status response', () => {})
  });
  
  describe('API endpoints', () => {
    test('/POST /apidocs/:id/endpoint --> newly created endpoint', () => {})
    test('/PUT /apidocs/:id/endpoint/:id --> newly updated endpoint', () => {})
    test('/DELETE /apidocs/:id/endpoint/:id --> status response', () => {})
  });
  
  describe('Users', () => {
    test('/POST /user/login--> logged in user data', () => {})
    test('/POST /user/register--> registered user data', () => {})
    test('/GET /user/:id --> user data with sepcified id', () => {})
    test('/PUT /user/:id --> newly updated user data with specified id', () => {})
    test('/DELETE /user/:id --> status response', () => {})
  });

  describe('Helper functions', () => {
    test('Hashing salted password', () => {});
    test('Compare passwords', () => {});
  });
});