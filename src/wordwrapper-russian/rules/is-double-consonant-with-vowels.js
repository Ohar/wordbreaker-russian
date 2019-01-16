// 119.7
// Нельзя оставлять в конце строки или переносить в начало следующей
// две одинаковые согласные, стоящие между гласными

import getLetter from './../utils/get-letter'
import isConsonant from './../utils/is-consonant'
import isVowel from './../utils/is-vowel'

export default function isDoubleConsonantWithVowels (pos, arr) {
    const cur            = getLetter(pos, arr)
    const next           = getLetter(pos + 1, arr)
    const afterNext      = getLetter(pos + 2, arr)
    const afterAfterNext = getLetter(pos + 3, arr)

    return next === afterNext &&
           isConsonant(next) &&
           isVowel(cur) &&
           isVowel(afterAfterNext)
}
