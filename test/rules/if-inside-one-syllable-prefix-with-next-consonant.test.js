import chai from 'chai'
import ifInsideOneSyllablePrefixWithNextConsonant from '@/wordbreaker-russian/rules/if-inside-one-syllable-prefix-with-next-consonant'

describe(
    'ifInsideOneSyllablePrefixWithNextConsonant', () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(ifInsideOneSyllablePrefixWithNextConsonant)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        inputWord: 'подбить',
                        expectedOutput: [
                            true,   // п
                            true,   // о
                            false,  // д
                            false,  // б
                            false,  // и
                            false,  // т
                            false,  // ь
                        ],
                    },
                    {
                        inputWord: 'размах',
                        expectedOutput: [
                            true,   // р
                            true,   // а
                            false,  // з
                            false,  // м
                            false,  // а
                            false,  // х
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
                                            ifInsideOneSyllablePrefixWithNextConsonant(
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
