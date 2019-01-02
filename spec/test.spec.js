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
});
