'use strict';

const SOFT_HYPHEN  = require('./consts/soft-hyphen'),
      isNeedHyphen = require('./utils/is-need-hyphen');

function wordbreakerRussian (text) {
  let words = text.replace(/\u00AD/g, '')
                  .split(' ');

  words = words.map(
    word => {
      let subWords = word
        .split('-')
        .map(
          subWord => subWord
            .split('')
            .map(
              (letter, k, lettersArr) => {
                if (isNeedHyphen(k, lettersArr)) {
                  letter += SOFT_HYPHEN;
                }

                return letter;
              }
            )
            .join('')
        );

      let formattedWord = subWords.join('-');

      return formattedWord;
    }
  );

  let formattedText = words.join(' ');

  return formattedText;
}

module.exports = wordbreakerRussian;
