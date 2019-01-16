// 119.4
// При переносе слов с приставками нельзя разбивать односложную приставку,
// если за приставкой идет согласный

import getPrefix from './../utils/get-prefix'
import getLetter from './../utils/get-letter'
import isConsonant from './../utils/is-consonant'
import ifInsideOfOneSyllablePrefix from './../utils/if-inside-of-one-syllable-prefix'

export default function ifInsideOneSyllablePrefixWithNextConsonant (pos, arr) {
    const word              = arr.join('')
    const prefix            = getPrefix(word)
    const letterAfterPrefix = getLetter(prefix.length, arr)

    return ifInsideOfOneSyllablePrefix(pos, prefix) &&
           isConsonant(letterAfterPrefix)
}
