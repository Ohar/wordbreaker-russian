/*
 jQuery.WordWrapper.js

 https://github.com/Ohar/jQuery.WordWrapper.js

 Copyright 2015, Pavel Lysenko

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

			function wordwrapper(e) {
				var text = e.text(),
					words = text.split(' ');

				words.forEach(function(word, i, words_arr){
					var subwords = word.split('-');
					subwords.forEach(function(subword, j, subwords_arr){
						var letters = subword.split('');
						letters.forEach(function(letter, k, letters_arr){
							if (vowels.indexOf(letter) + 1) {
								letters_arr[k] = letter + SOFT_HYPHEN;
							}
						});
						subword = letters.join('');
						subwords_arr[j] = subword;
					});
					word = subwords.join('-');
					words_arr[i] = word;
				});
				text = words.join('');
				e.text(text);
			}
		});

	};
})(jQuery);