const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  photoUrl: String,
  name: {
    type: String,
    required: true 
  }
});

module.exports = mongoose.model('Character', characterSchema);
