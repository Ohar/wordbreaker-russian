'use strict';

// 119.3
// Нельзя оставлять в конце строки или переносить на другую строку одну букву

function ifShortPart (pos, arr) {
  return (
       pos === 0
    || pos >= arr.length - 2
  )
}

module.exports = ifShortPart;
