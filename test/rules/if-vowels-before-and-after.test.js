'use strict'

import chai from 'chai'

import ifVowelsBeforeAndAfter from '@/wordbreaker-russian/rules/if-vowels-before-and-after'

describe(
    'ifVowelsBeforeAndAfter', () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(ifVowelsBeforeAndAfter)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        inputWord: 'околоток',
                        expectedOutputData: [
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                        ],
                    },
                    {
                        inputWord: 'просмотр',
                        expectedOutputData: [
                            false,
                            false,
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                        ],
                    },
                    {
                        inputWord: 'страх',
                        expectedOutputData: [
                            false,
                            false,
                            false,
                            false,
                            false,
                        ],
                    },
                    {
                        inputWord: 'ноосфера',
                        expectedOutputData: [
                            false,
                            true,
                            true,
                            true,
                            true,
                            true,
                            true,
                            false,
                        ],
                    },
                ]

                testCaseArr.forEach(
                    ({inputWord, expectedOutputData}) => {
                        it(
                            inputWord,
                            () => {
                                expectedOutputData.forEach(
                                    (result, i) => {
                                        chai.assert.equal(
                                            ifVowelsBeforeAndAfter(
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
