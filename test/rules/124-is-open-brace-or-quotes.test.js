import chai from 'chai'
import isOpenBraceOrQuotes from '@/wordbreaker-russian/rules/124-is-open-brace-or-quotes'

describe(
    'isOpenBraceOrQuotes',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(isOpenBraceOrQuotes)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        inputWord: '(нет)',
                        expectedOutput: [
                            true,   // (
                            false,  // н
                            false,  // е
                            false,  // т
                            false,  // )
                        ],
                    },
                    {
                        inputWord: 'ужас(((',
                        expectedOutput: [
                            false,  // у
                            false,  // ж
                            false,  // а
                            false,  // с
                            true,   // (
                            true,   // (
                            true,   // (
                        ],
                    },
                    {
                        inputWord: 'славно)))',
                        expectedOutput: [
                            false,  // с
                            false,  // л
                            false,  // а
                            false,  // в
                            false,  // н
                            false,  // о
                            false,  // )
                            false,  // )
                            false,  // )
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
                                            isOpenBraceOrQuotes(
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
