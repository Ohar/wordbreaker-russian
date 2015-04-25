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
			SOFT_HYPHEN = "\u00AD";

		var rules = {
			isConsonantWithNextVowel: isConsonantWithNextVowel,
			ifNoVowelsBeforeOrAfter: ifNoVowelsBeforeOrAfter ,
			ifShortEnding: ifShortEnding,
			ifVowelWithNextKratkaya: ifVowelWithNextKratkaya,
			isConsonantWithNextLetterSign: isConsonantWithNextLetterSign,
			isDoubleConsonantWithVowels: isDoubleConsonantWithVowels,
			ifOneSyllablePrefixWithNextConsonant: ifOneSyllablePrefixWithNextConsonant,
		};

		var utils = {
			isNeedHyphen: isNeedHyphen,
			checkSonorLevel: checkSonorLevel,
			isVowel: isVowel,
			isConsonant: isConsonant,
			getLetter: getLetter,
			ifInsideOfOneSyllablePrefix: ifInsideOfOneSyllablePrefix,
		};

		return this.each(function () {
			var $this = $(this);
			wordwrapper($this);
		});

		function wordwrapper(e) {
			var text = e.text(),
			    words = text.split(' ');

			words.forEach(function (word, i, words_arr) {
				var letters = word.split('');

				letters.forEach(function (letter, j, letters_arr) {
					if (utils.isNeedHyphen(j, letters_arr)) {
						letters_arr[j] += '×' + SOFT_HYPHEN;
					}
				});

				word = letters.join('');
				words_arr[i] = word;
			});

			text = words.join(' ');
			e.text(text);
		}

		function isNeedHyphen(pos, arr) {
			return (!rules.isConsonantWithNextVowel(pos, arr)
			    &&  !rules.ifNoVowelsBeforeOrAfter(pos, arr)
			    &&  !rules.ifShortEnding(pos, arr)
			    &&  !rules.ifVowelWithNextKratkaya(pos, arr)
			    &&  !rules.isConsonantWithNextLetterSign(pos, arr)
			    &&  !rules.isDoubleConsonantWithVowels(pos, arr)
			    &&  !rules.ifOneSyllablePrefixWithNextConsonant(pos, arr)
			);
		}

		function isConsonantWithNextVowel(pos, arr) {
			var cur = utils.getLetter(arr, pos),
			    next = utils.getLetter(arr, pos + 1);
			return utils.isConsonant(cur) && utils.isVowel(next);
		}

		function ifNoVowelsBeforeOrAfter(pos, arr) {
			var i,
			    len = arr.length,
			    result = true;

			for (i = pos + 1; i < len; i++) {
				if (utils.isVowel(arr[i])) {
					result = false;
					break;
				}
			}

			for (i = pos - 1; i >= 0; i--) {
				if (utils.isVowel(arr[i])) {
					result = false;
					break;
				}
			}
			return result;
		}

		function ifShortEnding(pos, arr) {
			return pos >= arr.length - 2;
		}

		function ifVowelWithNextKratkaya(pos, arr) {
			var cur = utils.getLetter(arr, pos),
			    next = utils.getLetter(arr, pos + 1);
			return utils.isVowel(cur) && next === 'й';
		}

		function isConsonantWithNextLetterSign(pos, arr) {
			var cur = utils.getLetter(arr, pos),
			    next = utils.getLetter(arr, pos + 1);
			return utils.isConsonant(cur) && (next === 'ь' || next === 'ъ');
		}

		function isDoubleConsonantWithVowels(pos, arr) {
			var cur = utils.getLetter(arr, pos),
			    next = utils.getLetter(arr, pos + 1),
			    afterNext = utils.getLetter(arr, pos + 2),
			    afterAfterNext = utils.getLetter(arr, pos + 2);

			return (next === nextNext)
				&& utils.isConsonant(next)
				&& utils.isVowel(cur)
				&& utils.isVowel(afterAfterNext);
		}

		function isConsonant(s) {
			return consonants.indexOf(s.toLowerCase()) + 1;
		}

		function isVowel(s) {
			return vowels.indexOf(s.toLowerCase()) + 1;
		}

		function getLetter(arr, pos) {
			return arr[pos] && arr[pos].toLowerCase()
		}
		
		// TODO:
		// При переносе слов с приставками нельзя 
		// разбивать односложную приставку, если 
		// за приставкой идет согласный.
		function ifOneSyllablePrefixWithNextConsonant(arr, pos) {
			var next = utils.getLetter(arr, pos + 1);
			return utils.ifInsideOfOneSyllablePrefix(arr, pos) && utils.isConsonant(next);
		}
		
		function ifInsideOfOneSyllablePrefix(arr, pos) {
			return false;
		}

	};
})(jQuery);