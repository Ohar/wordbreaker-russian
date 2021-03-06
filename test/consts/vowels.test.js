import chai from 'chai'
import VOWELS from '@/wordbreaker-russian/consts/vowels'

describe(
    'VOWELS', () => {
        it(
            'Возвращает массив', () => {
                chai.assert.isArray(VOWELS)
            }
        )

        it(
            'Возвращает массив строк', () => {
                chai.assert.isString(VOWELS[0])
            }
        )

        it(
            'Все строки содержат 1 букву', () => {
                VOWELS.forEach(
                    consonant => {
                        chai.assert(consonant.length === 1)
                    }
                )
            }
        )
    }
)
