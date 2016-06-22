'use strict';

// 118.0 
// Нельзя отделять согласную от следующей за ней гласной

const getLetter   = require('./../utils/get-letter'),
      isConsonant = require('./../utils/is-consonant'),
      isVowel     = require('./../utils/is-vowel');

function isConsonantWithNextVowel (pos, arr) {
  let cur  = getLetter(pos, arr),
      next = getLetter(pos + 1, arr);

  return isConsonant(cur) && isVowel(next);
}

module.exports = isConsonantWithNextVowel;
