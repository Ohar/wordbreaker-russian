import chai from 'chai'
import isConsonantWithNextLetterSign from '@/wordbreaker-russian/rules/119.1-is-consonant-with-next-letter-sign'

describe(
    'isConsonantWithNextLetterSign',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(isConsonantWithNextLetterSign)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        input: 'курьер',
                        expectedOutput: [
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                        ],
                    },
                    {
                        input: 'объявление',
                        expectedOutput: [
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                        ],
                    },
                    {
                        input: 'подъязычный',
                        expectedOutput: [
                            false,
                            false,
                            true,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                        ],
                    },
                    {
                        input: 'сласть',
                        expectedOutput: [
                            false,
                            false,
                            false,
                            false,
                            true,
                            false,
                        ],
                    },
                ]

                testCaseArr.forEach(
                    ({input, expectedOutput}) => {
                        it(
                            input,
                            () => {
                                expectedOutput.forEach(
                                    (result, i) => {
                                        chai.assert.equal(
                                            isConsonantWithNextLetterSign(
                                                i,
                                                input
                                            ),
                                            result
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)
