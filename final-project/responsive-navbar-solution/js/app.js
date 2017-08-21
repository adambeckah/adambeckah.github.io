$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width());

		if ($(window).width() > '875') {
			$('#large-nav').show();
			$('#burger').hide();
			$('#mobile-nav').hide()
		} else {
			$('#large-nav').hide();
			$('#burger').show();
		}
	})

	// toggle mobile nav
	$('#burger').click(function () {
		$('#mobile-nav').slideToggle();
	});
})
