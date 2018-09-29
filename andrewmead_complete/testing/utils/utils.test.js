const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers and return the result', () => {
    const res = utils.add(33, 11);
    expect(res).toBe(44);
    expect(typeof res).toBe('number');
  });
  describe('#asyncAdd', () => {
    it('should add two numbers and return the result asynchronously', done => {
      utils.asyncAdd(33, 11, sum => {
        expect(sum).toBe(44);
        expect(typeof sum).toBe('number');
        done();
      });
    });
  });
  it('should square the input and return the result', () => {
    const res = utils.square(2);
    expect(res).toBe(4);
    expect(typeof res).toBe('number');
  });
  it('verify first and last names added to object', () => {
    const obj = {};
    const testObj = utils.setName(obj, 'Cloud Strife');
    expect(testObj).toHaveProperty('firstName', 'Cloud');
    expect(testObj).toHaveProperty('lastName', 'Strife');
    expect(typeof testObj).toBe('object');
  });
});

it('should not be equal', () => {
  const testObj = { name: 'Kalalau' };
  expect(testObj).not.toEqual({ name: 'Cloud' });
});

it('should include some number', () => {
  expect([1, 2, 3]).toContain(2);
});

it('should have the same property', () => {
  expect({ name: 'Kalalau', age: 29 }).toHaveProperty('age', 29);
});
