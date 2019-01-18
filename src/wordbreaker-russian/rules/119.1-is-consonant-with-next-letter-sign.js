// 119.1
// Нельзя отрывать буквы `ь` и `ъ` от предшествующей согласной

import getLetter from './../utils/get-letter'
import isConsonant from './../utils/is-consonant'
import isSign from './../utils/is-sign'

export default function isConsonantWithNextLetterSign (pos, arr) {
    const curr = getLetter(pos, arr)
    const next = getLetter(pos + 1, arr)

    return isConsonant(curr) && isSign(next)
}
