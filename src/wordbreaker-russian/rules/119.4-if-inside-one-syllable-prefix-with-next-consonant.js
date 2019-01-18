// 119.4
// При переносе слов с приставками нельзя разбивать односложную приставку,
// если за приставкой идет согласный

import getPrefix from './../utils/get-prefix'
import getLetter from './../utils/get-letter'
import isConsonant from './../utils/is-consonant'
import ifInsideOfOneSyllablePrefix from './../utils/if-inside-of-one-syllable-prefix'

export default function ifInsideOneSyllablePrefixWithNextConsonant (pos, word) {
    const prefix            = getPrefix(word)
    const letterAfterPrefix = getLetter(prefix.length, word)

    return ifInsideOfOneSyllablePrefix(pos, prefix) &&
           isConsonant(letterAfterPrefix)
}
