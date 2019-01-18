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
                        expectedOutput: [
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
                        expectedOutput: [
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
                        expectedOutput: [
                            false,
                            false,
                            false,
                            false,
                            false,
                        ],
                    },
                    {
                        inputWord: 'ноосфера',
                        expectedOutput: [
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
                    ({inputWord, expectedOutput}) => {
                        it(
                            inputWord,
                            () => {
                                expectedOutput.forEach(
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
