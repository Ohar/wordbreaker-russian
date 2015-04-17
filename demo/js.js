$(function () {
	$('#addSoftHyphens').click(function () {
		$('.narrow').wordwrapper();
	});
	$('#removeSoftHyphens').click(function () {
		$('.narrow').each(function(i, e){
			var text = $(e).text();
			$(e).text(text.replace(/\u00AD/g, ''));
		})
	});
	$('#widthChanger').change(function () {
		$('.narrow').css('maxWidth', this.value + 'em')
	});
});