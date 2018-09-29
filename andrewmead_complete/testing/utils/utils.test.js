const utils = require('./utils');

it('should add two numbers and return the result', () => {
  const res = utils.add(33, 11);
  if (res !== 44) {
    throw Error(`Expected 44 but got ${res}`);
  }
});

it('should square the input and return the result', () => {
  const res = utils.square(2);
  if (res !== 4) {
    throw Error(`Expected 4 but got ${res}`);
  }
});
