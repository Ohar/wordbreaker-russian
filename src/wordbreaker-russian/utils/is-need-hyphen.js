'use strict'

import ifVowelsBeforeAndAfter from '../rules/117-if-vowels-before-and-after'
import isConsonantWithNextVowel from '../rules/118.0-is-consonant-with-next-vowel'
import isConsonantWithNextLetterSign from '../rules/119.1-is-consonant-with-next-letter-sign'
import ifVowelWithNextKratkaya from '../rules/119.2-if-vowel-with-next-kratkaya'
import ifShortPart from '../rules/119.3-if-short-part'
import ifInsideOneSyllablePrefixWithNextConsonant from '../rules/119.4-if-inside-one-syllable-prefix-with-next-consonant'
import isDoubleConsonantWithVowels from '../rules/119.7-is-double-consonant-with-vowels'
import isOpenBraceOrQuotes from '../rules/124-is-open-brace-or-quotes'

export default function isNeedHyphen (pos, arr) {
    return (
        ifVowelsBeforeAndAfter(pos, arr) && // 117
        !isConsonantWithNextVowel(pos, arr) && // 118.0
        !isConsonantWithNextLetterSign(pos, arr) && // 119.1
        !ifVowelWithNextKratkaya(pos, arr) && // 119.2
        !ifShortPart(pos, arr) && // 119.3
        !ifInsideOneSyllablePrefixWithNextConsonant(pos, arr) && // 119.4
        !isDoubleConsonantWithVowels(pos, arr) && // 119.7
        !isOpenBraceOrQuotes(pos, arr) // 124
    )
}
