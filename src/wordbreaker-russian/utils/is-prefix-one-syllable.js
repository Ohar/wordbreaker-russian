'use strict'

import isVowel from './../utils/is-vowel'

export default function isPrefixOneSyllable (prefix) {
    let vowels = 0

    for (let i = 0; i < prefix.length; i++) {
        if (isVowel(prefix[i])) {
            vowels++
        }
    }

    return Boolean(vowels === 1)
}
