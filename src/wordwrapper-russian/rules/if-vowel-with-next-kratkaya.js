'use strict';

// 119.2
// Нельзя отрывать букву `й` от предшествующей гласной

const getLetter = require('./../utils/get-letter'),
      isVowel   = require('./../utils/is-vowel');

function ifVowelWithNextKratkaya (pos, arr) {
  let cur  = getLetter(pos, arr),
      next = getLetter(pos + 1, arr);

  return isVowel(cur) && next === 'й';
}

module.exports = ifVowelWithNextKratkaya;
