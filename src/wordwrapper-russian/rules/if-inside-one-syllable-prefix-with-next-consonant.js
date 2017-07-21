'use strict';

// 119.4
// При переносе слов с приставками нельзя разбивать односложную приставку,
// если за приставкой идет согласный

const getPrefix                   = require('./../utils/get-prefix'),
      getLetter                   = require('./../utils/get-letter'),
      isConsonant                 = require('./../utils/is-consonant'),
      ifInsideOfOneSyllablePrefix = require('./../utils/if-inside-of-one-syllable-prefix');

function ifInsideOneSyllablePrefixWithNextConsonant (pos, arr) {
  let word              = arr.join(''),
      prefix            = getPrefix(word),
      letterAfterPrefix = getLetter(prefix.length, arr);

  return ifInsideOfOneSyllablePrefix(pos, prefix)
      && isConsonant(letterAfterPrefix);
}

module.exports = ifInsideOneSyllablePrefixWithNextConsonant;
