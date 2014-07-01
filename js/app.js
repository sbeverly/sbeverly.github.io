$(document).ready(function() {
	$('#aboutme').click(function(e) {
		e.preventDefault();
		$('#about-modal').foundation('reveal', 'open', '/aboutme.html');
	})
})