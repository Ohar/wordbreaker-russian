import chai from 'chai'
import ifShortPart from '@/wordbreaker-russian/rules/if-short-part'

describe(
    'ifShortPart',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(ifShortPart)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        inputWord: 'секуляризм',
                        expectedOutput: [
                            true,   // с
                            false,  // е
                            false,  // к
                            false,  // у
                            false,  // л
                            false,  // я
                            false,  // р
                            false,  // и
                            true,   // з
                            true,   // м
                        ],
                    },
                    {
                        inputWord: 'акация',
                        expectedOutput: [
                            true,   // а
                            false,  // к
                            false,  // а
                            false,  // ц
                            true,   // и
                            true,   // я
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
                                            ifShortPart(
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
