'use strict';

// 119.1
// Нельзя отрывать буквы `ь` и `ъ` от предшествующей согласной

const getLetter   = require('./../utils/get-letter'),
      isConsonant = require('./../utils/is-consonant');

function isConsonantWithNextLetterSign (pos, arr) {
  let cur              = getLetter(pos, arr),
      next             = getLetter(pos + 1, arr),
      isNextLetterSign = next === 'ь'
                      || next === 'ъ';

  return isConsonant(cur) && isNextLetterSign;
}

module.exports = isConsonantWithNextLetterSign;
