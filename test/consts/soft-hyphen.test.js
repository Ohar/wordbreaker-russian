'use strict';

const chai        = require('chai'),
      SOFT_HYPHEN = require('./../../consts/soft-hyphen');

describe(
  'SOFT_HYPHEN', () => {
    it(
      'Возвращает строку', () => {
        chai.assert.isString(SOFT_HYPHEN);
      }
    );

    it(
      'Строка непустая', () => {
        chai.assert.isAtLeast(SOFT_HYPHEN.length, 1);
      }
    );
  }
);
