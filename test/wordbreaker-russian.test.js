import chai from 'chai'
import wordbreakerRussian from '@/wordbreaker-russian/index'
import SOFT_HYPHEN from '@/wordbreaker-russian/consts/soft-hyphen'

describe(
    'wordbreakerRussian',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(wordbreakerRussian)
        )

        it(
            'Возвращает строку',
            () => chai.assert.isString(wordbreakerRussian('test'))
        )

        describe(
            'Правильно расставляет переносы',
            () => {
                // TODO: Написать тесты на все правила
                const testData = [
                    {
                        input: 'собака',
                        expectedOutput: `со${SOFT_HYPHEN}ба${SOFT_HYPHEN}ка`,
                    },
                    {
                        input: 'кот',
                        expectedOutput: 'кот',
                    },
                    {
                        input: 'Колорадо',
                        expectedOutput: `Ко${SOFT_HYPHEN}ло${SOFT_HYPHEN}ра${SOFT_HYPHEN}до`,
                    },
                ]

                testData.forEach(
                    ({input, expectedOutput}) => {
                        it(
                            `${input} → ${expectedOutput}`,
                            () => chai.assert.equal(
                                wordbreakerRussian(input),
                                expectedOutput
                            )
                        )
                    }
                )
            }
        )
    }
)
