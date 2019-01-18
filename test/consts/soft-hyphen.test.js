import chai from 'chai'
import SOFT_HYPHEN from '@/wordbreaker-russian/consts/soft-hyphen'

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
