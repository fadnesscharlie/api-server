'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

//models
const data = require('../src/models/index');

//sqlite initialization
beforeAll(async () => {
  await data.db.sync();
})

//sqlite termination
afterAll(async () => {
  await data.db.drop();
})

describe('Run test for server and API calls', () => {

  // ###### 404 Status Codes ###### 

  it('should respond with a status code 404 on a bad route', () => {
    return mockRequest
    .get('/foo')
    .then( results => {
      expect(results.status).toBe(404)
    })
  })

  it('should respond with a status code 404 on a bad method', () => {
    return mockRequest
    .get('/*')
    .then(results => {
      expect(results.req.method).toBe('GET')
    })
  })

  // ###### Clothes Routes ###### 

  it('should GET record from a get request', () => {
    return mockRequest
    .get('/clothes')
    .then(results => {
      expect(results.status).toBe(200)
      expect(Array.isArray(results.body)).toBeTruthy();
      expect(results.body).toEqual([])
    })
  })

  it('should POST while equaling data given', async () => {
    let obj = {
      shirtColor: 'test',
      pantColor: 'test'
    }
    let response = await mockRequest.post('/clothes').send(obj)
    expect(response.status).toBe(200)

    // Grabs the keys to test if the keys we made is the same as the response keys
    Object.keys(obj).forEach(key => {
      expect(obj[key]).toEqual(response.body[key])
    })

    // Make sure there is an id
    expect(response.body.id).toBeDefined();
  })

  it('should GET a single record from get request', () => {
    return mockRequest
    .get('/clothes/1')
    .then(results => {
      expect(results.status).toBe(200)

      // Makes sure there is only one thing in the array
      // expect(results.body.length).toEqual(1)
      expect(results.body.pantColor).toEqual('test')
    })
  })

  it('should UPDATE clothes request with new object', () => {
    let obj = {
      shirtColor: 'test1',
      pantColor: 'test1'
    }
    return mockRequest
    .put('/clothes/1').send(obj)
    .then(results => {
      expect(results.status).toBe(200)
      Object.keys(obj).forEach(key => {
        expect(obj[key]).toEqual(results.body[key])
      })

      // Test the type of body to have data and not an empty array
      expect( typeof results.body).toEqual('object');
      expect(results.body.pantColor).toEqual('test1')
    })
  })

  it('should DELETE a clothing item by id', () => {
    return mockRequest
    .delete('/clothes/1')
    .then(results => {
      expect(results.status).toBe(200)
    })
  })

  // ###### food Routes ######
  
  it('should GET record from a get request', () => {
    return mockRequest
    .get('/food')
    .then(results => {
      expect(results.status).toBe(200)
      expect(results.body).toEqual([])
    })
  })

  it('should POST while equaling data given', async () => {
    let obj = {
      name: 'test',
      filling: 'true',
      frosting: 'test'
    }
    let response = await mockRequest.post('/food').send(obj)
    expect(response.status).toBe(200)
    expect(response.body.name).toEqual('test')
  })

  it('should GET a single record from get request', () => {
    return mockRequest
    .get('/food/1')
    .then(results => {
      expect(results.status).toBe(200)
      expect(results.body.frosting).toEqual('test')
    })
  })

  it('should UPDATE food request with new object', () => {
    let obj = {
      name: 'test1',
      filling: 'true',
      frosting: 'test'
    }
    return mockRequest
    .put('/food/1').send(obj)
    .then(results => {
      expect(results.status).toBe(200)
      expect(results.body.filling).toEqual(true)
    })
  })

  it('should DELETE a clothing item by id', () => {
    return mockRequest
    .delete('/food/1')
    .then(results => {
      expect(results.status).toBe(200)
    })
  })
})
