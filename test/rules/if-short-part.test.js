import chai from 'chai'
import ifShortPart from '@/wordbreaker-russian/rules/if-short-part'

describe(
    'ifShortPart', () => {
        it(
            'Это функция', () => {
                chai.assert.isFunction(ifShortPart)
            }
        )

        it(
            'Правильно работает', () => {
                const inputs = [
                    {
                        position: 0,
                        word: 'акация',
                        result: true,
                    },
                    {
                        position: 1,
                        word: 'акация',
                        result: false,
                    },
                    {
                        position: 2,
                        word: 'акация',
                        result: false,
                    },
                    {
                        position: 3,
                        word: 'акация',
                        result: false,
                    },
                    {
                        position: 4,
                        word: 'акация',
                        result: true,
                    },
                ]

                inputs.forEach(
                    input => {
                        chai.assert.equal(
                            ifShortPart(
                                input.position,
                                input.word.split('')
                            ),
                            input.result
                        )
                    }
                )
            }
        )
    }
)
