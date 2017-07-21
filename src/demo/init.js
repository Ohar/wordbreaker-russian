import $ from 'jquery'
import wordwrapper from './../wordwrapper-russian'

const $needWrap = $('.narrow').add('.constantine')

$('#addSoftHyphens').click(() => {
	$needWrap.each(
		(i, e) => {
			const $el = $(e)

			$el.text(wordwrapper($el.text()))
		}
	)
})

$('#removeSoftHyphens').click(() => {
	$needWrap.each(
		(i, el) => {
			const $el = $(el)

			$el.text($el.text().replace(/\u00AD/g, ''))
		}
	)
})

$('#widthChanger').change(({target}) => {
	$('.narrow').css('maxWidth', `${target.value}em`)
})

wordwrapper()