$(function () {
	var $needWrap = $('.narrow').add('.constantine');

	$('#addSoftHyphens').click($needWrap.wordwrapper);

	$('#removeSoftHyphens').click(function () {
		$needWrap.each(function (i, e) {
			var text = $(e).text();
			$(e).text(text.replace(/\u00AD/g, ''));
		})
	});

	$('#widthChanger').change(function () {
		$('.narrow').css('maxWidth', this.value + 'em')
	});

	$needWrap.wordwrapper();
});
