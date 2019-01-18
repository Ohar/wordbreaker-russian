import chai from 'chai'
import ifVowelWithNextKratkaya from '@/wordbreaker-russian/rules/if-vowel-with-next-kratkaya'

describe(
    'ifVowelWithNextKratkaya',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(ifVowelWithNextKratkaya)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        inputWord: 'война',
                        expectedOutput: [
                            false,  // в
                            true,   // о
                            false,  // й
                            false,  // н
                            false,  // а
                        ],
                    },
                    {
                        inputWord: 'стойкий',
                        expectedOutput: [
                            false,  // с
                            false,  // т
                            true,   // о
                            false,  // й
                            false,  // к
                            true,   // и
                            false,  // й
                        ],
                    },
                    {
                        inputWord: 'фейерверк',
                        expectedOutput: [
                            false,  // ф
                            true,   // е
                            false,  // й
                            false,  // е
                            false,  // р
                            false,  // в
                            false,  // е
                            false,  // р
                            false,  // к
                        ],
                    },
                    {
                        inputWord: 'майор',
                        expectedOutput: [
                            false,  // м
                            true,   // а
                            false,  // й
                            false,  // о
                            false,  // р
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
                                            ifVowelWithNextKratkaya(
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
