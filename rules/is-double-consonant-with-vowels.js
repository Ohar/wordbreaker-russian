'use strict';

// 119.7
// Нельзя оставлять в конце строки или переносить в начало следующей
// две одинаковые согласные, стоящие между гласными

const getLetter   = require('./../utils/get-letter'),
      isConsonant = require('./../utils/is-consonant'),
      isVowel     = require('./../utils/is-vowel');

function isDoubleConsonantWithVowels (pos, arr) {
  let cur            = getLetter(pos, arr),
      next           = getLetter(pos + 1, arr),
      afterNext      = getLetter(pos + 2, arr),
      afterAfterNext = getLetter(pos + 3, arr);

  return next === afterNext
      && isConsonant(next)
      && isVowel(cur)
      && isVowel(afterAfterNext);
}

module.exports = isDoubleConsonantWithVowels;
