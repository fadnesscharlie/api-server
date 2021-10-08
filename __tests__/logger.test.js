'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

xdescribe('Run test for server and API calls', () => {
  it('should respond with a status code 404 on a bad route', () => {
    return mockRequest
    .get('/foo')
    .then( results => {
      expect(results.status).toBe(404)
    })
  })
})
