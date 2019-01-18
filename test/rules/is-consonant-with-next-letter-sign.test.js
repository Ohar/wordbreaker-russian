'use strict'

import chai from 'chai'

import isConsonantWithNextLetterSign from '@/wordbreaker-russian/rules/is-consonant-with-next-letter-sign'

describe(
    'isConsonantWithNextLetterSign', () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(isConsonantWithNextLetterSign)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        inputWord: 'курьер',
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
                        inputWord: 'объявление',
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
                        inputWord: 'подъязычный',
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
                        inputWord: 'сласть',
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
                    ({inputWord, expectedOutput}) => {
                        it(
                            inputWord,
                            () => {
                                expectedOutput.forEach(
                                    (result, i) => {
                                        chai.assert.equal(
                                            isConsonantWithNextLetterSign(
                                                i,
                                                inputWord
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
