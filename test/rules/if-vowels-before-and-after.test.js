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
                        inputWord: 'просмотр',
                        expectedOutputData: [
                            {
                                position: 0,
                                result: true,
                            },
                            {
                                position: 1,
                                result: true,
                            },
                            {
                                position: 2,
                                result: false,
                            },
                            {
                                position: 3,
                                result: true,
                            },
                            {
                                position: 4,
                                result: true,
                            },
                            {
                                position: 5,
                                result: true,
                            },
                            {
                                position: 6,
                                result: true,
                            },
                        ],
                    },
                    {
                        inputWord: 'страх',
                        expectedOutputData: [
                            {
                                position: 0,
                                result: true,
                            },
                            {
                                position: 1,
                                result: true,
                            },
                            {
                                position: 2,
                                result: true,
                            },
                            {
                                position: 3,
                                result: true,
                            },
                        ],
                    },
                ]

                testCaseArr.forEach(
                    ({inputWord, expectedOutputData}) => {
                        it(
                            inputWord,
                            () => {
                                expectedOutputData.forEach(
                                    ({position, result}) => {
                                        chai.assert.equal(
                                            ifVowelsBeforeAndAfter(
                                                position,
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
