const request = require('supertest');
const app = require('../app');

process.env.NODE_ENV = 'test';

describe('Unit tests', () => {
    test('Hashing string', () => {});
    test('Generate salt', () => {});
    test('Generate token', () => {});
    test('Extract user data from token', () => {});
});