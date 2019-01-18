'use strict'

import chai from 'chai'

import isDoubleConsonantWithVowels from '@/wordbreaker-russian/rules/is-double-consonant-with-vowels'

describe(
    'isDoubleConsonantWithVowels', () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(isDoubleConsonantWithVowels)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        inputWord: 'медленный',
                        expectedOutput: [
                            false,  // м
                            false,  // е
                            false,  // д
                            false,  // л
                            true,   // е
                            false,  // н
                            true,   // н
                            false,  // ы
                            false,  // й
                        ],
                    },
                    {
                        inputWord: 'длинношеее',
                        expectedOutput: [
                            false,  // д
                            false,  // л
                            true,   // и
                            false,  // н
                            true,   // н
                            false,  // о
                            false,  // ш
                            false,  // е
                            false,  // е
                            false,  // е
                        ],
                    },
                    {
                        inputWord: 'законность',
                        expectedOutput: [
                            false,  // з
                            false,  // а
                            false,  // к
                            true,   // о
                            false,  // н
                            true,   // н
                            false,  // о
                            false,  // с
                            false,  // т
                            false,  // ь
                        ],
                    },
                    {
                        inputWord: 'нёсся',
                        expectedOutput: [
                            false,  // н
                            true,   // ё
                            false,  // с
                            true,   // с
                            false,  // я
                        ],
                    },
                    {
                        inputWord: 'спасся',
                        expectedOutput: [
                            false,  // с
                            false,  // п
                            true,   // а
                            false,  // с
                            true,   // с
                            false,  // я
                        ],
                    },
                    {
                        inputWord: 'одиннадцать',
                        expectedOutput: [
                            false,  // о
                            false,  // д
                            true,   // и
                            false,  // н
                            true,   // н
                            false,  // а
                            false,  // д
                            false,  // ц
                            false,  // а
                            false,  // т
                            false,  // ь
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
                                            isDoubleConsonantWithVowels(
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
