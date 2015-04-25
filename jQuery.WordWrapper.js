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
			SOFT_HYPHEN = "\u00AD",
			sonorLvls = {
				'а': 4,
				'е': 4,
				'ё': 4,
				'и': 4,
				'о': 4,
				'у': 4,
				'ы': 4,
				'э': 4,
				'ю': 4,
				'я': 4,

				'й': 3.5,

				'л': 3,
				'м': 3,
				'н': 3,
				'р': 3,

				'б': 2,
				'г': 2,
				'д': 2,
				'ж': 2,
				'з': 2,

				'в': 1.5,

				'к': 1,
				'х': 1,
				'п': 1,
				'ф': 1,
				'т': 1,
				'с': 1,
				'ш': 1,
				'ч': 1,
				'ц': 1,

			};

		var rules = {
			checkSonorLevel: checkSonorLevel,
			isConsonantWithNextVowel: isConsonantWithNextVowel,
			ifNoVowelsBeforeOrAfter: ifNoVowelsBeforeOrAfter ,
			ifShortEnding: ifShortEnding,
			ifVowelWithNextKratkaya: ifVowelWithNextKratkaya,
			isConsonantWithNextLetterSign: isConsonantWithNextLetterSign,
			isDoubleConsonantWithVowels: isDoubleConsonantWithVowels,
		};

		var utils = {
			isNeedHyphen: isNeedHyphen,
			checkSonorLevel: checkSonorLevel,
			isVowel: isVowel,
			isConsonant: isConsonant,
			getLetter: getLetter,
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
			return (rules.checkSonorLevel(pos, arr)
			    && !rules.isConsonantWithNextVowel(pos, arr)
			    && !rules.ifNoVowelsBeforeOrAfter(pos, arr)
			    && !rules.ifShortEnding(pos, arr)
			    && !rules.ifVowelWithNextKratkaya(pos, arr)
			    && !rules.isConsonantWithNextLetterSign(pos, arr)
			    //&& !rules.isDoubleConsonantWithVowels(pos, arr)
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
			var prev = utils.getLetter(arr, pos - 1),
				cur = utils.getLetter(arr, pos),
			    next = utils.getLetter(arr, pos + 1);
			    nextNext = utils.getLetter(arr, pos + 2);

			return (cur === next)
				&& utils.isVowel(prev)
				&& utils.isVowel(nextNext);
		}

		function checkSonorLevel(pos, arr) {
			var cur = utils.getLetter(arr, pos),
			    prev = utils.getLetter(arr, pos - 1),
			    next = utils.getLetter(arr, pos + 1),
			    sonor = {
			    	prev: sonorLvls[prev],
			    	cur: sonorLvls[cur],
			    	next: sonorLvls[next],
			    };

			return (sonor.prev < sonor.cur) && (sonor.cur > sonor.next);
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

	};
})(jQuery);