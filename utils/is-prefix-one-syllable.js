'use strict';

const isVowel = require('./../utils/is-vowel');

function isPrefixOneSyllable (prefix) {
  let vowels = 0;

  for (let i = 0; i < prefix.length; i++) {
    if (isVowel(prefix[i])) {
      vowels++;
    }
  }

  return Boolean(vowels === 1);
}

module.exports = isPrefixOneSyllable;
