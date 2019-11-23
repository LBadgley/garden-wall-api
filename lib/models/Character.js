const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  photoUrl: String,
  name: {
    type: String,
    required: true 
  }
});

module.exports = mongoose.model("Character", CharacterSchema);
