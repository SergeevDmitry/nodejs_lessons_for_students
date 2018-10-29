console.log('Strating app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

console.log(_.isString(true));
console.log(_.isString('string'));

var filteredArray = _.uniq(['String', 1, 2, 'String', 2, 6]);
console.log(filteredArray);

// var res = notes.addNote(4, 50);
// console.log(res);

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
