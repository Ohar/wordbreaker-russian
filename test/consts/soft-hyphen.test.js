const chai = require('chai')
const SOFT_HYPHEN = require('./../../src/wordwrapper-russian/consts/soft-hyphen')

describe(
    'SOFT_HYPHEN', () => {
        it(
            'Возвращает строку', () => {
                chai.assert.isString(SOFT_HYPHEN)
            }
        )

        it(
            'Строка непустая', () => {
                chai.assert.isAtLeast(SOFT_HYPHEN.length, 1)
            }
        )
    }
)
