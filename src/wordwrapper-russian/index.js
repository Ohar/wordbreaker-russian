import SOFT_HYPHEN from './consts/soft-hyphen'
import isNeedHyphen from './utils/is-need-hyphen'

export default function wordbreakerRussian (text) {
    return text
        .replace(new RegExp(SOFT_HYPHEN, 'g'), '')
        .split(' ')
        .map(
            word => word
                .split('-')
                .map(
                    subWord => subWord
                        .split('')
                        .map(
                            (letter, k, lettersArr) => isNeedHyphen(k, lettersArr)
                                ? letter + SOFT_HYPHEN
                                : letter
                        )
                        .join('')
                )
                .join('-')
        )
        .join(' ')
}
