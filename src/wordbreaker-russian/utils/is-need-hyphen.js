'use strict'

import ifInsideOneSyllablePrefixWithNextConsonant from './../rules/if-inside-one-syllable-prefix-with-next-consonant'
import ifShortPart from './../rules/if-short-part'
import ifVowelsBeforeAndAfter from './../rules/if-vowels-before-and-after'
import ifVowelWithNextKratkaya from './../rules/if-vowel-with-next-kratkaya'
import isConsonantWithNextVowel from './../rules/is-consonant-with-next-vowel'
import isConsonantWithNextLetterSign from './../rules/is-consonant-with-next-letter-sign'
import isDoubleConsonantWithVowels from './../rules/is-double-consonant-with-vowels'

export default function isNeedHyphen(pos, arr) {
    return (
        ifVowelsBeforeAndAfter(pos, arr) && // 117
        !isConsonantWithNextVowel(pos, arr) && // 118.0
        !isConsonantWithNextLetterSign(pos, arr) && // 119.1
        !ifVowelWithNextKratkaya(pos, arr) && // 119.2
        !ifShortPart(pos, arr) && // 119.3
        !ifInsideOneSyllablePrefixWithNextConsonant(pos, arr) && // 119.4
        !isDoubleConsonantWithVowels(pos, arr) // 119.7
    )
}
