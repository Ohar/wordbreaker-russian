'use strict';

const chai                    = require('chai'),
      ifVowelsBeforeAndAfter = require('./../../rules/if-vowels-before-and-after');

describe(
  'ifVowelsBeforeAndAfter', () => {

    it(
      'Это функция', () => {
        chai.assert.isFunction(ifVowelsBeforeAndAfter);
      }
    );

    describe(
      'Правильно работает', () => {

        it(
          'просмотр', () => {
            const word   = 'просмотр'.split(''),
                  inputs = [
                    {
                      position: 0,
                      result  : true,
                    },
                    {
                      position: 1,
                      result  : true,
                    },
                    {
                      position: 2,
                      result  : false,
                    },
                    {
                      position: 3,
                      result  : true,
                    },
                    {
                      position: 4,
                      result  : true,
                    },
                    {
                      position: 5,
                      result  : true,
                    },
                    {
                      position: 6,
                      result  : true,
                    },
                  ];

            inputs.forEach(
              input => {
                chai.assert.equal(
                  ifVowelsBeforeAndAfter(
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
          'страх', () => {
            const word   = 'страх'.split(''),
                  inputs = [
                    {
                      position: 0,
                      result  : true,
                    },
                    {
                      position: 1,
                      result  : true,
                    },
                    {
                      position: 2,
                      result  : true,
                    },
                    {
                      position: 3,
                      result  : true,
                    },
                  ];

            inputs.forEach(
              input => {
                chai.assert.equal(
                  ifVowelsBeforeAndAfter(
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
