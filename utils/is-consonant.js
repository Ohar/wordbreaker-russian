'use strict';

const consonants = require('./../consts/consonants');

function isConsonant (s) {
  return Boolean(s && consonants.indexOf(s.toLowerCase()) + 1);
}

module.exports = isConsonant;
