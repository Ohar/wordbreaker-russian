'use strict';

const isVowel = require('./../utils/is-vowel');

function ifVowelsBeforeAndAfter (pos, arr) {
  let before = false,
      after  = false;

  for (let i = pos + 1; i < arr.length; i++) {
    if (isVowel(arr[i])) {
      after = true;
      break;
    }
  }

  for (let i = pos; i >= 0; i--) {
    if (isVowel(arr[i])) {
      before = true;
      break;
    }
  }

  return before && after;
}

module.exports = ifVowelsBeforeAndAfter;
