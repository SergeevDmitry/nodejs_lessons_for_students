console.log('Strating app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var res = notes.addNote(4, 50);
console.log(res);

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
