console.log('Strating app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];
console.log(process.argv);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else {
  console.log('Not found');
}
