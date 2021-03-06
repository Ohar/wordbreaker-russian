import chai from 'chai'
import isDoubleConsonantWithVowels from '@/wordbreaker-russian/rules/119.7-is-double-consonant-with-vowels'

describe(
    'isDoubleConsonantWithVowels',
    () => {
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
                    {
                        inputWord: 'жужжать',
                        expectedOutput: [
                            false,  // ж
                            true,   // у
                            false,  // ж
                            true,   // ж
                            false,  // а
                            false,  // т
                            false,  // ь
                        ],
                    },
                    {
                        inputWord: 'масса',
                        expectedOutput: [
                            false,  // м
                            true,   // а
                            false,  // с
                            true,   // с
                            false,  // а
                        ],
                    },
                    {
                        inputWord: 'конный',
                        expectedOutput: [
                            false,  // к
                            true,   // о
                            false,  // н
                            true,   // н
                            false,  // ы
                            false,  // й
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
