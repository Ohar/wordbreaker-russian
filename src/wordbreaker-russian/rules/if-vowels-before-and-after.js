// 117
// При переносе слов нельзя ни оставлять в конце строки,
// ни переносить на другую строку часть слова, не составляющую слога.

import isVowel from './../utils/is-vowel'

export default function ifVowelsBeforeAndAfter (pos, word) {
    let before = false
    let after  = false

    for (let i = pos + 1; i < word.length; i++) {
        if (isVowel(word[i])) {
            after = true
            break
        }
    }

    for (let i = pos; i >= 0; i--) {
        if (isVowel(word[i])) {
            before = true
            break
        }
    }

    return before && after
}
