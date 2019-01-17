// 119.1
// Нельзя отрывать буквы `ь` и `ъ` от предшествующей согласной

import getLetter from './../utils/get-letter'
import isConsonant from './../utils/is-consonant'

export default function isConsonantWithNextLetterSign (pos, arr) {
    const cur              = getLetter(pos, arr)
    const next             = getLetter(pos + 1, arr)
    const isNextLetterSign = next === 'ь' || next === 'ъ'

    return isConsonant(cur) && isNextLetterSign
}
