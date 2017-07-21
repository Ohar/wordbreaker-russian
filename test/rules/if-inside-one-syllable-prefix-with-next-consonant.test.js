'use strict';

const chai                                       = require('chai'),
      ifInsideOneSyllablePrefixWithNextConsonant = require('./../../src/rules/if-inside-one-syllable-prefix-with-next-consonant');

describe(
  'ifInsideOneSyllablePrefixWithNextConsonant', () => {

    it(
      'Это функция', () => {
        chai.assert.isFunction(ifInsideOneSyllablePrefixWithNextConsonant);
      }
    );

    describe(
      'Правильно работает', () => {

        it(
          'подбить', () => {
            const word   = 'подбить'.split(''),
                  inputs = [
                    {
                      position: 0,
                      result: true,
                    },
                    {
                      position: 1,
                      result: true,
                    },
                    {
                      position: 2,
                      result: false,
                    },
                    {
                      position: 3,
                      result: false,
                    },
                    {
                      position: 4,
                      result: false,
                    },
                    {
                      position: 5,
                      result: false,
                    },
                  ];

            inputs.forEach(
              input => {
                chai.assert.equal(
                  ifInsideOneSyllablePrefixWithNextConsonant(
                    input.position,
                    word
                  ),
                  input.result
                );
              }
            );
          }
        );

        it(
          'размах', () => {
            const word   = 'размах'.split(''),
                  inputs = [
                    {
                      position: 0,
                      result: true,
                    },
                    {
                      position: 1,
                      result: true,
                    },
                    {
                      position: 2,
                      result: false,
                    },
                    {
                      position: 3,
                      result: false,
                    },
                    {
                      position: 4,
                      result: false,
                    },
                  ];

            inputs.forEach(
              input => {
                chai.assert.equal(
                  ifInsideOneSyllablePrefixWithNextConsonant(
                    input.position,
                    word
                  ),
                  input.result
                );
              }
            );
          }
        );

      }
    );

  }
);
