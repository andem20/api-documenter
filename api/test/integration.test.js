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

    test('/GET /apidocs/:id (invalid id format) --> repond with 406 not acceptable', async () => {
      return await request(app).get(`${BASE_URL}/apidocs/123456789`)
        .expect('Content-Type', /json/)
        .expect(406);
    });

    test('/GET /apidocs/:id (doesnot exist) --> repond with 404 not found', async () => {
      return await request(app).get(`${BASE_URL}/apidocs/61729330266119ceb1b549aa`)
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
        .send(apidoc)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining(apidoc)
          )
        });
    });

    test('/PUT /apidocs/:id --> newly updated apidoc with specified id', async () => {
      let updatedApidoc = {};

      await request(app).get(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685`)
        .then(response => {
          response.title = 'Updated title';
          updatedApiDoc = response;
        });

      return await request(app).put(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685`)
        .send(updatedApidoc)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining(updatedApiDoc)
          )
        });
    });

    test('/DELETE /apidocs/:id --> status response', async () => {
      return await request(app).delete(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685`)
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  
  describe('API endpoints', () => {
    test('/POST /apidocs/:id/endpoint --> newly created endpoint', async () => {
      // Prepare new apidoc
      const endpoint = {
        _id: '6172683d6200028f38d928b0',
        requestType: 'POST',
        endpoint: '/somenewendpoint',
        description: 'This is the description.',
        output: 'This is the output'
      };

      return await request(app).post(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685/endpoint`)
        .send(endpoint)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining(endpoint)
          )
        });
    });

    test('/PUT /apidocs/:id/endpoint/:id --> newly updated endpoint', async () => {
      const updatedEndpoint = {
        _id: '61726d4b33a38f70c3f93613',
        requestType: 'GET',
        endpoint: '/users/:id',
        description: 'This is some description of POST',
        output: '{test: "POST"}'
      };

      return await request(app).put(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685/endpoint/61726d4b33a38f70c3f93613`)
        .send(updatedEndpoint)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining(updatedEndpoint));
        });
    });

    test('/DELETE /apidocs/:id/endpoint/:id --> status response', async () => {
      return await request(app).delete(`${BASE_URL}/apidocs/617264c46a0e589fd24f1685/endpoint/61726d4b33a38f70c3f93613`)
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  
  describe('Users', () => {
    test('/POST /user/login--> logged in user data', async () => {
      const loginData = {
        email: 'some@email.com',
        password: 'password'
      };

      return await request(app).post(`${BASE_URL}/users/login`)
        .send(loginData)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining({
              token: expect.any(String)
            })
          );
        });
    });

    test('/POST /user/login--> failed authentication', async () => {
      const loginDataWrongPassword = {
        email: 'some@email.com',
        password: 'wrongpassword'
      };

      await request(app).post(`${BASE_URL}/users/login`)
        .send(loginDataWrongPassword)
        .expect('Content-Type', /json/)
        .expect(401);

        const loginDataWrongEmail = {
          email: 'wrong@email.com',
          password: 'password'
        };
  
        return await request(app).post(`${BASE_URL}/users/login`)
          .send(loginDataWrongEmail)
          .expect('Content-Type', /json/)
          .expect(401);
    });

    test('/POST /user/register--> registered user data', async () => {
      const userData = {
        username: 'newUser',
        email: 'new@email.com',
        password: 'somepassword'
      };

      return await request(app).post(`${BASE_URL}/users/register`)
        .send(userData)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining({
              token: expect.any(String)
            })
          );
        });
    });

    test('/GET /user/:id --> user data with sepcified id', async () => {
      return await request(app).get(`${BASE_URL}/users/617270faba0e1204399654b3`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              apidocs_ids: expect.arrayContaining([expect.any(String)])
            })
          );
        })
    });

    test('/PUT /user/:id --> newly updated user data with specified id', async () => {
      const updatedUserData = {
        _id: '617270faba0e1204399654b3',
        username: 'updatedUsername',
        email: 'new@email.com',
        password: 'somepassword'
      };

      return await request(app).put(`${BASE_URL}/users/617270faba0e1204399654b3`)
        .send(updatedUserData)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(
            expect.objectContaining({
              token: expect.any(String)
            })
          );
        });
    });

    test('/DELETE /user/:id --> status response', async () => {
      return await request(app).delete(`${BASE_URL}/users/617270faba0e1204399654b3`)
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  test('Extract user data from token', () => {
    // Login
    // Extract data from token
  });
});