'use strict';

function ifInsidePrefix (pos, prefix) {
  return prefix && (pos + 1 < prefix.length);
}

module.exports = ifInsidePrefix;
