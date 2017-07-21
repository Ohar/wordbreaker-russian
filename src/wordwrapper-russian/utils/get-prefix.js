'use strict';

const ifStartWith = require('./../utils/if-start-with'),
      PREFIXES    = require('./../consts/prefixes');

function getPrefix (word) {
  let prefix     = '',
      prefixTemp = '';

  for (let i = 0; i < PREFIXES.length; i++) {
    if (
         ifStartWith(word, PREFIXES[i])
      && prefixTemp.length < PREFIXES[i].length
    ) {
      prefix = prefixTemp = PREFIXES[i];
    }
  }

  return prefix;
}

module.exports = getPrefix;
