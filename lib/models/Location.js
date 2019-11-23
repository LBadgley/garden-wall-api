const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  photoUrl: String,
  name: {
    type: String,
    required
  }
});
