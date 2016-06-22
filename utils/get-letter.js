'use strict';

function getLetter (pos, arr) {
  return arr[pos]
      && arr[pos].toLowerCase()
}

module.exports = getLetter;
