import chai from 'chai'
import ifShortPart from '@/wordbreaker-russian/rules/119.3-if-short-part'

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
                        input: 'секуляризм',
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
                        input: 'акация',
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
                    ({input, expectedOutput}) => {
                        it(
                            input,
                            () => {
                                expectedOutput.forEach(
                                    (result, i) => {
                                        chai.assert.equal(
                                            ifShortPart(
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
