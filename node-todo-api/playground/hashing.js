const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
}

var token = jwt.sign(data, '123abc');
var decode = jwt.verify(token, '123abc');

var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`${message}`);
console.log(`${hash}`);
