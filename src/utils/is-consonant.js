'use strict';

const CONSONANTS = require('./../consts/consonants');

function isConsonant (s) {
  return Boolean(s && CONSONANTS.indexOf(s.toLowerCase()) + 1);
}

module.exports = isConsonant;
