$(function () {
	$('#addSoftHyphens').click(function () {
		$('.narrow').add('.constantine').wordwrapper();
	});
	$('#removeSoftHyphens').click(function () {
		$('.narrow').add('.constantine').each(function(i, e){
			var text = $(e).text();
			$(e).text(text.replace(/\u00AD/g, ''));
		})
	});
	$('#widthChanger').change(function () {
		$('.narrow').css('maxWidth', this.value + 'em')
	});
});