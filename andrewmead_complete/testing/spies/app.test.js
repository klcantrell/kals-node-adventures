const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

it('should call saveUser with the user object', () => {
  const db = {
    saveUser: jest.fn(),
  };
  app.__set__('db', db);
  app.handleSignup('cloudstrife@ff.com', 17);
  expect(db.saveUser).toHaveBeenCalledWith({
    email: 'cloudstrife@ff.com',
    age: 17,
  });
});
