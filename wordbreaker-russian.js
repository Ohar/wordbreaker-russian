'use strict';

const log4js       = require('log4js'),
      SOFT_HYPHEN  = require('./consts/soft-hyphen'),
      isNeedHyphen = require('./utils/is-need-hyphen'),
      logger       = log4js.getLogger('wordbreakerRussian');

function wordbreakerRussian (text) {
  let words = text.replace(/\u00AD/g, '')
                  .split(' ');

  logger.info('Input', text);

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

      logger.trace('Word %s → %s', word, formattedWord);

      return formattedWord;
    }
  );

  let formattedText = words.join(' ');

  logger.info('Output', formattedText);

  return formattedText;
}

module.exports = wordbreakerRussian;
