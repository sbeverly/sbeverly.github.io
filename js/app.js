$(document).ready(function() {
	setInterval(function() {
		$('#arrow').fadeIn()	
		$('#arrow').animate({
			marginTop: "88vh"
		}, 1000)
	}, 550)

	// $("#post-excerpt > a").attr("disabled", "disabled")
})

var removeLinksInExcerpt = function(excerpt) {
	// console.log(excerpt)
}