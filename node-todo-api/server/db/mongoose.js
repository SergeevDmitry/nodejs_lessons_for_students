const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MongoDB_URI);

module.exports = {
  mongoose
};
