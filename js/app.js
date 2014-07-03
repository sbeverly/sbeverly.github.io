$(document).ready(function() {
	setInterval(function() {
		$('#arrow').fadeIn()	
		$('#arrow').animate({
			marginTop: "720"
		}, 1000)
	}, 550)
})