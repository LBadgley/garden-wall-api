const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/characters', (req, res, next) => {
    const regex = new RegExp('Character', 'gm');
    Character
      .find({ profession: regex })
      .then(characters => res.send(characters))
      .catch(next);
  });



