'use strict';

const ifStartWith = require('./../utils/if-start-with'),
      prefixes    = require('./../utils/prefixes');

function getPrefix (word) {
  let prefix     = '',
      prefixTemp = '';

  for (let i = 0; i < prefixes.length; i++) {
    if (
         ifStartWith(word, prefixes[i])
      && prefixTemp.length < prefixes[i].length
    ) {
      prefix = prefixTemp = prefixes[i];
    }
  }

  return prefix;
}

module.exports = getPrefix;
