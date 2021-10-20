const request = require('supertest');
const app = require('../app');
const {mongoConnect, mongoDisconnect} = require('../config/db');

process.env.NODE_ENV = 'test';

let server;

beforeAll(async () => {
  server = request(app);
  await mongoConnect();
});

afterAll(async () => {
  await mongoDisconnect();
})

describe('Integration tests', () => {
  describe('API documents', () =>  {
    it('/GET /apidocs/ --> all docs (id, title)', async () => {
      return await server.get('/api/v1/apidocs')
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
  
    it('/GET /apidocs/:id --> apidoc with specified id', () => {})
    it('/POST /apidocs/ --> newly created apidoc', () => {})
    it('/PUT /apidocs/:id --> newly updated apidoc with specified id', () => {})
    it('/DELETE /apidocs/:id --> status response', () => {})
  });
  
  describe('API endpoints', () => {
    it('/POST /apidocs/:id/endpoint --> newly created endpoint', () => {})
    it('/PUT /apidocs/:id/endpoint/:id --> newly updated endpoint', () => {})
    it('/DELETE /apidocs/:id/endpoint/:id --> status response', () => {})
  });
  
  describe('Users', () => {
    it('/POST /user/login--> logged in user data', () => {})
    it('/POST /user/register--> registered user data', () => {})
    it('/GET /user/:id --> user data with sepcified id', () => {})
    it('/PUT /user/:id --> newly updated user data with specified id', () => {})
    it('/DELETE /user/:id --> status response', () => {})
  });

  describe('Helper functions', () => {
    it('Hashing salted password', () => {});
  });
});