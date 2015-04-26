/*
 jQuery.WordWrapper.js

 https://github.com/Ohar/jQuery.WordWrapper.js

 © 2015, Pavel Lysenko aka Ohar

 Released under the MIT license.
 http://www.opensource.org/licenses/mit-license.php

 Version: v 0.1
 Date: Thu Apr 16, 2015
 */

(function ($) {
    $.fn.wordwrapper = function () {

        var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
            consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п',
                'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь'],
            prefixes = ['а', 'ана', 'без', 'безо', 'бес', 'в', 'вз', 'взаимо', 'взо',
                'вне', 'внутри', 'во', 'воз', 'возо', 'вос', 'вс', 'все', 'вы', 'гипер',
                'гипо', 'до', 'еже', 'за', 'из', 'изо', 'ин', 'ис', 'испод', 'к', 'квази',
                'ко', 'кое', 'кой', 'ку', 'меж', 'междо', 'между', 'мета', 'мимо', 'на',
                'над', 'надо', 'наи', 'не', 'небез', 'небезо', 'небес', 'недо', 'нео',
                'ни', 'низ', 'низо', 'нис', 'о', 'об', 'обез', 'обезо', 'обес', 'обо',
                'обще', 'около', 'орто', 'от', 'ото', 'пан', 'пара', 'пере', 'по', 'под',
                'пода', 'подо', 'поза', 'после', 'пост', 'пра', 'пре', 'пред', 'предо',
                'при', 'про', 'против', 'противо', 'прото', 'раз', 'разо', 'рас', 'роз',
                'рос', 'с', 'сверх', 'со', 'среди', 'су', 'суб', 'супер', 'сыз', 'транс',
                'тре', 'у', 'через', 'черес', 'чрез', 'экс'],
            SOFT_HYPHEN = "\u00AD";

        var rules = {
            isConsonantWithNextVowel: isConsonantWithNextVowel,
            ifVowelsBeforeAndAfter: ifVowelsBeforeAndAfter,
            ifShortPart: ifShortPart,
            ifVowelWithNextKratkaya: ifVowelWithNextKratkaya,
            isConsonantWithNextLetterSign: isConsonantWithNextLetterSign,
            isDoubleConsonantWithVowels: isDoubleConsonantWithVowels,
            ifOneSyllablePrefixWithNextConsonant: ifOneSyllablePrefixWithNextConsonant,
        };

        var utils = {
            isNeedHyphen: isNeedHyphen,
            isVowel: isVowel,
            isConsonant: isConsonant,
            getLetter: getLetter,
            ifInsideOfOneSyllablePrefix: ifInsideOfOneSyllablePrefix,
            ifInsidePrefix: ifInsidePrefix,
            isPrefixOneSyllable: isPrefixOneSyllable,
            ifStartWith: ifStartWith,
            getPrefix: getPrefix,
        };

        return this.each(function () {
            var $this = $(this);
            wordwrapper($this);
        });

        function wordwrapper(e) {
            var text = e.text(),
                words = text.split(' ');

            words.forEach(function (word, i, words_arr) {

                var subWords = word.split('-');
                subWords.forEach(function(subWord, j, subWords_arr){
                    var letters = subWord.split('');
                    letters.forEach(function(letter, k, letters_arr){
                        if (utils.isNeedHyphen(k, letters_arr)) {
                            letters_arr[k] += SOFT_HYPHEN;
                        }
                    });
                    subWord = letters.join('');
                    subWords_arr[j] = subWord;
                });
                word = subWords.join('-');
                words_arr[i] = word;
            });

            text = words.join(' ');
            e.text(text);
        }

        function isNeedHyphen(pos, arr) {
            return (rules.ifVowelsBeforeAndAfter(pos, arr) // 117
                && !rules.isConsonantWithNextVowel(pos, arr) // 118.0
                && !rules.isConsonantWithNextLetterSign(pos, arr) // 119.1
                && !rules.ifVowelWithNextKratkaya(pos, arr) // 119.2
                && !rules.ifShortPart(pos, arr) // 119.3
                && !rules.ifOneSyllablePrefixWithNextConsonant(pos, arr) // 119.4
                && !rules.isDoubleConsonantWithVowels(pos, arr) // 119.7
            );
        }

        function isConsonantWithNextVowel(pos, arr) {
            var cur = utils.getLetter(pos, arr),
                next = utils.getLetter(pos + 1, arr);
            return utils.isConsonant(cur) && utils.isVowel(next);
        }

        function ifVowelsBeforeAndAfter(pos, arr) {
            var i,
                len = arr.length,
                before = false,
                after = false;

            for (i = pos + 1; i < len; i++) {
                if (utils.isVowel(arr[i])) {
                    after = true;
                    break;
                }
            }

            for (i = pos; i >= 0; i--) {
                if (utils.isVowel(arr[i])) {
                    before = true;
                    break;
                }
            }

            return before && after;
        }

        function ifShortPart(pos, arr) {
            return (pos === 0) || (pos >= arr.length - 2);
        }

        function ifVowelWithNextKratkaya(pos, arr) {
            var cur = utils.getLetter(pos, arr),
                next = utils.getLetter(pos + 1, arr);
            return utils.isVowel(cur) && next === 'й';
        }

        function isConsonantWithNextLetterSign(pos, arr) {
            var cur = utils.getLetter(pos, arr),
                next = utils.getLetter(pos + 1, arr);
            return utils.isConsonant(cur) && (next === 'ь' || next === 'ъ');
        }

        function isDoubleConsonantWithVowels(pos, arr) {
            var cur = utils.getLetter(pos, arr),
                next = utils.getLetter(pos + 1, arr),
                afterNext = utils.getLetter(pos + 2, arr),
                afterAfterNext = utils.getLetter(pos + 2, arr);

            return (next === afterNext)
                && utils.isConsonant(next)
                && utils.isVowel(cur)
                && utils.isVowel(afterAfterNext);
        }

        function isConsonant(s) {
            return Boolean(s && consonants.indexOf(s.toLowerCase()) + 1);
        }

        function isVowel(s) {
            return Boolean(s && vowels.indexOf(s.toLowerCase()) + 1);
        }

        function getLetter(pos, arr) {
            return arr[pos] && arr[pos].toLowerCase()
        }

        // TODO:
        // При переносе слов с приставками нельзя
        // разбивать односложную приставку, если
        // за приставкой идет согласный.
        function ifOneSyllablePrefixWithNextConsonant(pos, arr) {
            var next = utils.getLetter(pos + 1, arr);
            return utils.ifInsideOfOneSyllablePrefix(pos, arr)
                && utils.isConsonant(next);
        }

        function ifInsideOfOneSyllablePrefix(pos, arr) {
            var word = arr.join(''),
                prefix = utils.getPrefix(word);

            return utils.ifInsidePrefix(pos, prefix)
                && utils.isPrefixOneSyllable(prefix);
        }

        function ifInsidePrefix(pos, prefix) {
            return prefix && (pos < prefix.length);
        }

        function ifStartWith(string, start) {
            return string.indexOf(start) === 0;
        }

        function getPrefix(word) {
            var i,
                len = prefixes.length,
                prefix = '',
                prefixTemp = '';

            for (i = 0; i < len; i++){
                if (
                    utils.ifStartWith(word, prefixes[i])
                 && prefixTemp.length < prefixes[i].length
                ) {
                    prefix = prefixTemp = prefixes[i];
                }
            }

            return prefix;
        }

        function isPrefixOneSyllable(prefix) {

            return false;
        }

    };
})(jQuery);
