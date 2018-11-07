const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5be341524e6117118fc78430';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todos', todos);
// }).catch((e) => console.log(e));
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById('5be341524e6117118fc78430').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify, undefined, 2);
}, (e) => {
  console.log(e);
})
