import chai from 'chai'
import {HYPHEN_SOFT} from '@/wordbreaker-russian/consts/symbolDict'

describe(
    'HYPHEN_SOFT', () => {
        it(
            'Возвращает строку', () => {
                chai.assert.isString(HYPHEN_SOFT)
            }
        )

        it(
            'Строка непустая', () => {
                chai.assert.isAtLeast(HYPHEN_SOFT.length, 1)
            }
        )
    }
)
