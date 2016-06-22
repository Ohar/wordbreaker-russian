'use strict';

function ifShortPart (pos, arr) {
  return (
       pos === 0
    || pos >= arr.length - 2
  )
}

module.exports = ifShortPart;
