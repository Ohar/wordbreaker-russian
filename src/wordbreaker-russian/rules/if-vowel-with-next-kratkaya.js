// 119.2
// Нельзя отрывать букву `й` от предшествующей гласной

import getLetter from './../utils/get-letter'
import isVowel from './../utils/is-vowel'

export default function ifVowelWithNextKratkaya (pos, arr) {
    const cur  = getLetter(pos, arr)
    const next = getLetter(pos + 1, arr)

    return isVowel(cur) && next === 'й'
}
