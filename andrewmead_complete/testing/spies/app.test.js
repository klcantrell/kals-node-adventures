const expect = require('expect');

const app = require('./app');
const db = require('./db');

jest.mock('./db');

it('should call saveUser with the user object', () => {
  app.handleSignup('cloudstrife@ff.com', 17);
  expect(db.saveUser).toHaveBeenCalledWith({
    email: 'cloudstrife@ff.com',
    age: 17,
  });
});
