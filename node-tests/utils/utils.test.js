const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(2);

  expect(res).toBe(4).toBeA('number');
});

it('should expect some values', () => {
  // expect(12).toNotBe(122);
  expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
});
