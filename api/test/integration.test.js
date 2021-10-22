const request = require('supertest');
const app = require('../app');
const APIDoc = require('../models/APIDoc');
const {mongoConnect, mongoDisconnect} = require('../config/db');
const testData = require('./testData');

process.env.NODE_ENV = 'test';
const BASE_URL = '/api/v1';

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

beforeEach(async () => {
  await clearDatabase();
});

describe('Integration tests', () => {
  describe('API documents', () =>  {
    test('/GET /apidocs/ --> all docs (id, title)', async () => {
      return await request(app).get(`${BASE_URL}/apidocs`)
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
  
    test('/GET /apidocs/:id --> apidoc with specified id', async () => {
      return await request(app).get(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining({
              _id: expect.any(String),
              title: expect.any(String),
              endpoints: expect.arrayContaining([
                expect.objectContaining({
                  _id: expect.any(String),
                  requestType: expect.any(String),
                  endpoint: expect.any(String),
                  description: expect.any(String),
                  output: expect.any(String)
                })
              ])
            })
          );
        });
    });

    test('/GET /apidocs/:id (invalid id) --> repond with 404 not found', async () => {
      return await request(app).get(`${BASE_URL}/apidocs/123456789`)
        .expect('Content-Type', /json/)
        .expect(404);
    });

    test('/POST /apidocs/ --> newly created apidoc', async () => {
      // Prepare new apidoc
      const apidoc = {
        _id: '6172683d6200028f38d928b3',
        title: 'New Apidoc',
        endpoints: [
          {
            _id: '6172683d6200028f38d928b4',
            requestType: 'POST',
            endpoint: '/someendpoint',
            description: 'This is the description.',
            output: 'This is the output'
          }
        ]
      };

      return await request(app).post(`${BASE_URL}/apidocs`)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
          expect(response.body).toEqual(apidoc);
        });
    });

    test('/PUT /apidocs/:id --> newly updated apidoc with specified id', async () => {
      return await request(app).put(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining({
              _id: expect.any(String),
              title: expect.any(String),
              endpoints: expect.arrayContaining([
                expect.objectContaining({
                  _id: expect.any(String),
                  requestType: expect.any(String),
                  endpoint: expect.any(String),
                  description: expect.any(String),
                  output: expect.any(String)
                })
              ])
            })
          );
        });
    });

    test('/DELETE /apidocs/:id --> status response', async () => {
      return await request(app).put(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685`)
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  
  describe('API endpoints', () => {
    test('/POST /apidocs/:id/endpoint --> newly created endpoint', async () => {})
    test('/PUT /apidocs/:id/endpoint/:id --> newly updated endpoint', async () => {})
    test('/DELETE /apidocs/:id/endpoint/:id --> status response', async () => {})
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