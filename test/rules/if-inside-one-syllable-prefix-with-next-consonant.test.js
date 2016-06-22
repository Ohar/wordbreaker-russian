'use strict';

const chai                                       = require('chai'),
      ifInsideOneSyllablePrefixWithNextConsonant = require('./../../rules/if-inside-one-syllable-prefix-with-next-consonant');

describe(
  'ifInsideOneSyllablePrefixWithNextConsonant', () => {
    it(
      'Это функция', () => {
        chai.assert.isFunction(ifInsideOneSyllablePrefixWithNextConsonant);
      }
    );
  }
);
