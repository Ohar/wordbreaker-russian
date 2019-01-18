// 119.7
// Нельзя оставлять в конце строки или переносить в начало следующей
// две одинаковые согласные, стоящие между гласными

import getLetter from './../utils/get-letter'
import isConsonant from './../utils/is-consonant'
import isVowel from './../utils/is-vowel'

export default function isDoubleConsonantWithVowels (pos, arr) {
    const beforePrev     = getLetter(pos - 2, arr)
    const prev           = getLetter(pos - 1, arr)
    const curr           = getLetter(pos + 0, arr)
    const next           = getLetter(pos + 1, arr)
    const afterNext      = getLetter(pos + 2, arr)
    const afterAfterNext = getLetter(pos + 3, arr)

    const isDoubleConsonantsBefore = Boolean(
        curr === prev &&
        isConsonant(curr) &&
        isVowel(beforePrev) &&
        isVowel(next)
    )

    const isDoubleConsonantsAfter = Boolean(
        next === afterNext &&
        isConsonant(next) &&
        isVowel(curr) &&
        isVowel(afterAfterNext)
    )

    return isDoubleConsonantsBefore || isDoubleConsonantsAfter
}
