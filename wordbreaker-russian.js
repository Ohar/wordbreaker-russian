'use strict';

const isNeedHyphen = require('./utils/is-need-hyphen'),
      SOFT_HYPHEN  = require('./consts/soft-hyphen'),
      log4js       = require('log4js'),
      logger       = log4js.getLogger('wordbreakerRussian');

function wordbreakerRussian (text) {
  let text  = text.replace(/\u00AD/g, ''),
      words = text.split(' ');

  logger.info('Input', text);

  words.map(
    word => {
      let subWords = word.split('-');

      subWords.map(
        subWord => {
          let letters = subWord.split('');

          letters.map(
            (letter, k, lettersArr) => {
              if (isNeedHyphen(k, lettersArr)) {
                letter += SOFT_HYPHEN;
              }

              return letter;
            }
          );

          subWord = letters.join('');

          return subWord;
        }
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
