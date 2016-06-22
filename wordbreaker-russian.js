'use strict';

const isNeedHyphen = require('./utils/is-need-hyphen'),
      SOFT_HYPHEN  = require('./consts/soft-hyphen');

function wordbreakerRussian (text) {
  let text  = text.replace(/\u00AD/g, ''),
      words = text.split(' ');

  words.forEach(
    (word, i, words_arr) => {

      let subWords = word.split('-');

      subWords.forEach(
        (subWord, j, subWordsArr) => {
          let letters = subWord.split('');

          letters.forEach(
            (letter, k, letters_arr) => {
              if (isNeedHyphen(k, letters_arr)) {
                letters_arr[k] += SOFT_HYPHEN;
              }
            }
          );

          subWord = letters.join('');
          subWordsArr[j] = subWord;
        }
      );

      word = subWords.join('-');
      words_arr[i] = word;
    }
  );

  text = words.join(' ');

  return text;
}

module.exports = wordbreakerRussian;
