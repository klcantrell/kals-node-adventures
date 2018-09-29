const request = require('supertest');
const server = require('./server');
const expect = require('expect');

const app = require('./server');

describe('Server', () => {
  describe('#get /', () => {
    it('should return hello world response', done => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).toHaveProperty('error', 'Page not found');
        })
        .end(done);
    });
  });

  describe('#get /users', () => {
    it('should return an array of users', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toContainEqual({ name: 'Kalalau' });
        })
        .end(done);
    });
  });
});
