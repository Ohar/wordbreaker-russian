// 119.2
// Нельзя отрывать букву `й` от предшествующей гласной

import getLetter from './../utils/get-letter'
import isVowel from './../utils/is-vowel'

export default function ifVowelWithNextKratkaya (pos, word) {
    const curr = getLetter(pos, word)
    const next = getLetter(pos + 1, word)

    return isVowel(curr) && next === 'й'
}
