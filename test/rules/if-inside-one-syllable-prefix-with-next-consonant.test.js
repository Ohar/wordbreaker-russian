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

    it(
      'Правильно работает', () => {
        const inputs = [
          {
            position: 0,
            word: 'подбить',
            result: true,
          },
          {
            position: 1,
            word: 'подбить',
            result: true,
          },
          {
            position: 2,
            word: 'подбить',
            result: false,
          },
          {
            position: 3,
            word: 'подбить',
            result: false,
          },
          {
            position: 4,
            word: 'подбить',
            result: false,
          },
          {
            position: 5,
            word: 'подбить',
            result: false,
          },
          {
            position: 0,
            word: 'размах',
            result: true,
          },
          {
            position: 1,
            word: 'размах',
            result: true,
          },
          {
            position: 2,
            word: 'размах',
            result: false,
          },
          {
            position: 3,
            word: 'размах',
            result: false,
          },
          {
            position: 4,
            word: 'размах',
            result: false,
          },
        ];

        inputs.forEach(
          input => {
            chai.assert.equal(
              ifInsideOneSyllablePrefixWithNextConsonant(
                input.position,
                input.word.split('')
              ),
              input.result
            );
          }
        );
      }
    );

  }
);
