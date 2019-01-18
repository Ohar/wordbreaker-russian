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
                            false,  // к
                            false,  // у
                            true,   // р
                            false,  // ь
                            false,  // е
                            false,  // р
                        ],
                    },
                    {
                        input: 'объявление',
                        expectedOutput: [
                            false,  // о
                            true,   // б
                            false,  // ъ
                            false,  // я
                            false,  // в
                            false,  // л
                            false,  // е
                            false,  // н
                            false,  // и
                            false,  // е
                        ],
                    },
                    {
                        input: 'подъязычный',
                        expectedOutput: [
                            false,  // п
                            false,  // о
                            true,   // д
                            false,  // ъ
                            false,  // я
                            false,  // з
                            false,  // ы
                            false,  // ч
                            false,  // н
                            false,  // ы
                            false,  // й
                        ],
                    },
                    {
                        input: 'сласть',
                        expectedOutput: [
                            false,  // с
                            false,  // л
                            false,  // а
                            false,  // с
                            true,   // т
                            false,  // ь
                        ],
                    },
                    {
                        input: 'подъезд',
                        expectedOutput: [
                            false,  // п
                            false,  // о
                            true,   // д
                            false,  // ъ
                            false,  // е
                            false,  // з
                            false,  // д
                        ],
                    },
                    {
                        input: 'большой',
                        expectedOutput: [
                            false,  // б
                            false,  // о
                            true,   // л
                            false,  // ь
                            false,  // ш
                            false,  // о
                            false,  // й
                        ],
                    },
                    {
                        input: 'бульон',
                        expectedOutput: [
                            false,  // б
                            false,  // у
                            true,   // л
                            false,  // ь
                            false,  // о
                            false,  // н
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
