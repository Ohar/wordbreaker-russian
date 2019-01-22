import chai from 'chai'
import wordbreakerRussian from '@/wordbreaker-russian/index'
import {HYPHEN_SOFT} from '@/wordbreaker-russian/consts/symbolDict'

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
                        expectedOutput: `со${HYPHEN_SOFT}ба${HYPHEN_SOFT}ка`,
                    },
                    {
                        input: 'кот',
                        expectedOutput: 'кот',
                    },
                    {
                        input: 'Колорадо',
                        expectedOutput: `Ко${HYPHEN_SOFT}ло${HYPHEN_SOFT}ра${HYPHEN_SOFT}до`,
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
