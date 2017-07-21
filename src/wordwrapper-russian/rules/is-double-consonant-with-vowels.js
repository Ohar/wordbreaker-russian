'use strict';

// 119.7
// Нельзя оставлять в конце строки или переносить в начало следующей
// две одинаковые согласные, стоящие между гласными

import getLetter from './../utils/get-letter';
import isConsonant from './../utils/is-consonant';
import isVowel from './../utils/is-vowel';

export default function isDoubleConsonantWithVowels (pos, arr) {
    const cur            = getLetter(pos, arr),
          next           = getLetter(pos + 1, arr),
          afterNext      = getLetter(pos + 2, arr),
          afterAfterNext = getLetter(pos + 3, arr);

    return next === afterNext
           && isConsonant(next)
           && isVowel(cur)
           && isVowel(afterAfterNext);
}
