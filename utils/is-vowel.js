'use strict';

const VOWELS = require('./../consts/vowels');

function isVowel (s) {
  return Boolean(s && VOWELS.indexOf(s.toLowerCase()) + 1);
}

module.exports = isVowel;
