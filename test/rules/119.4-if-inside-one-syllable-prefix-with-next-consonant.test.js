import chai from 'chai'
import ifInsideOneSyllablePrefixWithNextConsonant from '@/wordbreaker-russian/rules/119.4-if-inside-one-syllable-prefix-with-next-consonant'

describe(
    'ifInsideOneSyllablePrefixWithNextConsonant',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(ifInsideOneSyllablePrefixWithNextConsonant)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        input: 'подбить',
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
                        input: 'размах',
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
                    ({input, expectedOutput}) => {
                        it(
                            input,
                            () => {
                                expectedOutput.forEach(
                                    (result, i) => {
                                        chai.assert.equal(
                                            ifInsideOneSyllablePrefixWithNextConsonant(
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
