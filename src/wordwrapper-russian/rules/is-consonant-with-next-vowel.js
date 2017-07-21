// 118.0
// Нельзя отделять согласную от следующей за ней гласной

import getLetter from './../utils/get-letter';
import isConsonant from './../utils/is-consonant';
import isVowel from './../utils/is-vowel';

export default function isConsonantWithNextVowel (pos, arr) {
    const cur  = getLetter(pos, arr),
          next = getLetter(pos + 1, arr);

    return isConsonant(cur) && isVowel(next);
}
