'use strict';

import isPrefixOneSyllable from './../utils/is-prefix-one-syllable';
import ifInsidePrefix from './../utils/if-inside-prefix';

export default function ifInsideOfOneSyllablePrefix (pos, prefix) {
    return ifInsidePrefix(pos, prefix)
        && isPrefixOneSyllable(prefix);
}