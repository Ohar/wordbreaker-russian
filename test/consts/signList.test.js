import chai from 'chai'
import SIGN_LIST from '@/wordbreaker-russian/consts/signList'

describe(
    'SIGN_LIST', () => {
        it(
            'Возвращает массив', () => {
                chai.assert.isArray(SIGN_LIST)
            }
        )

        it(
            'Возвращает массив строк', () => {
                chai.assert.isString(SIGN_LIST[0])
            }
        )

        it(
            'Все строки содержат 1 букву', () => {
                SIGN_LIST.forEach(consonant => {
                    chai.assert(consonant.length === 1)
                })
            }
        )
    }
)
