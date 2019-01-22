import {HYPHEN_SOFT, HYPHEN_MINUS, SPACE} from './consts/symbolDict'
import isNeedHyphen from './utils/is-need-hyphen'

export default function wordbreakerRussian (text) {
    return text
        .replace(new RegExp(HYPHEN_SOFT, 'g'), '')
        .split(SPACE)
        .map(
            word => word
                .split(HYPHEN_MINUS)
                .map(
                    subWord => subWord
                        .split('')
                        .map(
                            (letter, k, lettersArr) => isNeedHyphen(k, lettersArr)
                                ? letter + HYPHEN_SOFT
                                : letter
                        )
                        .join('')
                )
                .join(HYPHEN_MINUS)
        )
        .join(SPACE)
}
