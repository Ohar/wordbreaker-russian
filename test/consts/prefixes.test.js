const chai = require('chai')
const PREFIXES = require('./../../src/wordwrapper-russian/consts/prefixes')

describe(
    'PREFIXES', () => {
        it(
            'Возвращает массив', () => {
                chai.assert.isArray(PREFIXES)
            }
        )

        it(
            'Возвращает массив строк', () => {
                chai.assert.isString(PREFIXES[0])
            }
        )

        it(
            'Все строки содержат не менее 1 буквы', () => {
                PREFIXES.forEach(
                    consonant => {
                        chai.assert(consonant.length >= 1)
                    }
                )
            }
        )
    }
)
