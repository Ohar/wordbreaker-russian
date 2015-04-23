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
	$.fn.wordwrapper = function (options) {

		var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
			consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п',
			              'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь'],
			SOFT_HYPHEN = "\u00AD";

		options = $.extend({}, options);

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
					if (isNeedHyphen(letter, j, letters_arr)) {
						letters_arr[j] = letter + SOFT_HYPHEN;
					}
				});

				word = letters.join('');
				words_arr[i] = word;
			});

			text = words.join(' ');
			e.text(text);
		}

		function isNeedHyphen(letter, pos, arr) {
			return (
			    isVowel(letter) && 
			    !ifLastVowel(pos, arr) && 
			    !ifShortEnding(pos, arr) &&
			    !ifIKratkayaAfter(pos, arr)
			);
		}

		function isVowel(letter) {
			return vowels.indexOf(letter) + 1;
		}

		function ifLastVowel(pos, arr) {
			var i, result = true;
			for (i = pos + 1; i < arr.length; i++) {
				if (isVowel(arr[i])) {
					result = false;
					break;
				}
			}
			return result;
		}

		function ifShortEnding(pos, arr) {
			return pos >= arr.length - 2;
		}

		function ifIKratkayaAfter(pos, arr) {
		    var next = arr[pos + 1];
			return next === 'й' || next === 'Й';
		}
	};
})(jQuery);