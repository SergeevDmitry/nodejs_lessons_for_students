const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  })
});

var hashedPassword = '$2a$10$1wf8KG9ggKSo4Up9WXqypOGY1u2tR.hg1ezrJ9uPnarzmyABGQy0u';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})

// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123abc');
// var decode = jwt.verify(token, '123abc');
//
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`${message}`);
// console.log(`${hash}`);
