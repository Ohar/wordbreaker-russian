'use strict';

const isPrefixOneSyllable = require('./../utils/is-prefix-one-syllable'),
      ifInsidePrefix      = require('./../utils/if-inside-of-one-syllable-prefix');

function ifInsideOfOneSyllablePrefix (pos, prefix) {
  return ifInsidePrefix(pos, prefix)
      && isPrefixOneSyllable(prefix);
}

module.exports = ifInsideOfOneSyllablePrefix;
