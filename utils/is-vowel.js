'use strict';

const vowels = require('./../consts/vowels');

function isVowel (s) {
  return Boolean(s && vowels.indexOf(s.toLowerCase()) + 1);
}

module.exports = isVowel;
