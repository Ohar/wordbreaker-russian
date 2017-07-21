'use strict';

const ifInsideOneSyllablePrefixWithNextConsonant = require('./../rules/if-inside-one-syllable-prefix-with-next-consonant'),
      ifShortPart                                = require('./../rules/if-short-part'),
      ifVowelsBeforeAndAfter                     = require('./../rules/if-vowels-before-and-after'),
      ifVowelWithNextKratkaya                    = require('./../rules/if-vowel-with-next-kratkaya'),
      isConsonantWithNextVowel                   = require('./../rules/is-consonant-with-next-vowel'),
      isConsonantWithNextLetterSign              = require('./../rules/is-consonant-with-next-letter-sign'),
      isDoubleConsonantWithVowels                = require('./../rules/is-double-consonant-with-vowels');

function isNeedHyphen (pos, arr) {
  return (
       ifVowelsBeforeAndAfter(pos, arr) // 117
    && !isConsonantWithNextVowel(pos, arr) // 118.0
    && !isConsonantWithNextLetterSign(pos, arr) // 119.1
    && !ifVowelWithNextKratkaya(pos, arr) // 119.2
    && !ifShortPart(pos, arr) // 119.3
    && !ifInsideOneSyllablePrefixWithNextConsonant(pos, arr) // 119.4
    && !isDoubleConsonantWithVowels(pos, arr) // 119.7
  );
}

module.exports = isNeedHyphen;
