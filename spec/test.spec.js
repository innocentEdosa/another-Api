const request = require('request');

const serve = require('../api');

describe('Questioner Api', () => {
  let server;
  // before the test starts initialise server
  beforeAll(() => {
    server = serve;
  });
  // After all the test finishes server should close
  afterAll(() => {
    server.close();
  });
  // test for GET/meetups
  describe('GET /meetups', () => {
    const data = {};
    beforeAll((done) => {
      request.get('http://localhost:3004/api/v1/meetups', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(200);
    });
    it('body', () => {
      expect(data.body.data[0]).toBeDefined();
    });
  });
  // test for endpoint /post which creates a meetup with the right params!
  describe('POST /meetups', () => {
    const data = {};
    beforeAll((done) => {
      request.post('http://localhost:3004/api/v1/meetups', {
        json: {
          location: 'venue',
          happeningOn: 'when',
          images: 'imagurl',
          topic: 'thrid meetup',
          tags: ['tags'],
          description: 'insight must be more',
          createdBy: 'innocentEdosa',
        },
      }, (error, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('status 201', () => {
      expect(data.status).toBe(201);
      expect(data.body).toBeDefined();
    });
  });
  // test for POST/meetups not creating any meetup due to invalid params
  describe('POST /meetups', () => {
    const data = {};
    beforeAll((done) => {
      request.post('http://localhost:3004/api/v1/meetups', (error, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('status 422', () => {
      expect(data.status).toBe(422);
      expect(data.body).toBeDefined();
    });
  });
  // test for endpoint /meetups/:meetup for retrieving a specific post
  describe('GET /meetups/:meetup', () => {
    const data = {};
    beforeAll((done) => {
      request.get('http://localhost:3004/api/v1/meetups/1', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(200);
    });
    it('body', () => {
      expect(data.body).toBeDefined();
    });
  });
});
