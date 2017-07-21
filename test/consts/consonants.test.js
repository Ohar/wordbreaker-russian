'use strict';

const chai       = require('chai'),
      CONSONANTS = require('./../../src/consts/consonants');

describe(
  'CONSONANTS', () => {
    it(
      'Возвращает массив', () => {
        chai.assert.isArray(CONSONANTS);
      }
    );

    it(
      'Возвращает массив строк', () => {
        chai.assert.isString(CONSONANTS[0]);
      }
    );

    it(
      'Все строки содержат 1 букву', () => {
        CONSONANTS.forEach(consonant => {
          chai.assert(consonant.length === 1);
        })
      }
    );
  }
);
