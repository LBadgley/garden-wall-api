/* eslint-disable no-console */
const mongoose = require('mongoose');
// const { parse } = require('url');

// connect to database

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function() {
  console.log('connect achieved!');
}).on('error', function(error) {
  console.log('connection error:', error);
});
