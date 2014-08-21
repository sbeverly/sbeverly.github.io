$(document).ready(function() {
	setInterval(function() {
		$('#arrow').fadeIn()	
		$('#arrow').animate({
			marginTop: "88vh"
		}, 1000)
	}, 550)
})