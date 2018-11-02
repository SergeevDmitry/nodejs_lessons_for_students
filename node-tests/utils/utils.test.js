const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
})

it('should async Square', (done) => {
  utils.asyncSquare(4, (sq) => {
    expect(sq).toBe(16).toBeA('number');
    done();
  })
})

it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  })
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(122);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2,3,4]).toInclude(2);
//   // expect([2,3,4]).toExclude(5);
//   // expect({
//   //   name: 'Andrew',
//   //   age: 25,
//   //   location: 'Philadelphia'
//   // }).toInclude({
//   //   age: 25
//   // })
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 22
//   })
// });
