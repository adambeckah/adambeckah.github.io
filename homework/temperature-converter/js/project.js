// var fAnswer = parseFloat($('#f-answer').html());
// var cAnswer = parseFloat($('#c-answer').html());

// F to C

// $('#f-button').click(function() {
// 	var farVal = $('#f-input').val();
// 	$('#c-answer').html((farVal - 32) * 5 / 9);
// 	var cAnswer = parseFloat($('#c-answer').html());
// 	if (cAnswer > 27) {
// 		$('#f-box').addClass('hot').removeClass('cold');
// 	} else if (cAnswer <= 0) {
// 		$('#f-box').addClass('cold').removeClass('hot');
// 	} else {
// 		$('#f-box').removeClass('cold').removeClass('hot');
// 	}
// });

// // // C to F
// $('#c-button').click(function() {
// 	var celVal = $('#c-input').val();
// 	$('#f-answer').html(celVal * 9 / 5 +32);
// 	var fAnswer = parseFloat($('#f-answer').html());
// 	if (fAnswer > 80) {
// 		$('#c-box').addClass('hot').removeClass('cold');
// 	} else if (fAnswer <= 32) {
// 		$('#c-box').addClass('cold').removeClass('hot');
// 	} else {
// 		$('#c-box').removeClass('cold').removeClass('hot');
// 	}
	
// });



$('.convert').click(function(){
	var farVal = parseFloat($('#f-input').val());
	$('#c-answer').html((farVal - 32) * 5 / 9);
	var cAnswer = parseFloat($('#c-answer').html());
	
	var celVal = parseFloat($('#c-input').val());
	$('#f-answer').html((celVal * 9 / 5 +32));
	var fAnswer = parseFloat($('#f-answer').html());
	
	if (fAnswer > 80) {
		$('#c-box').addClass('hot').removeClass('cold');
		$('.picture').slideUp();
	} else if (fAnswer <= 32) {
		$('#c-box').addClass('cold').removeClass('hot');
		$('.picture').slideUp();
	} else {
		$('#c-box').removeClass('cold').removeClass('hot');
		$('.picture').slideUp();
	}
	
	if (cAnswer > 27) {
		$('#f-box').addClass('hot').removeClass('cold');
		$('.picture').slideUp();
	} else if (cAnswer <= 0) {
		$('#f-box').addClass('cold').removeClass('hot');
		$('.picture').slideUp();
	} else if (fAnswer = 24) {
		$('.picture').slideDown();
	} else if (cAnswer = 24) {
		$('.picture').slideDown();
	} else {
		$('#f-box').removeClass('cold').removeClass('hot');
	}

});

// I can't figure out why I'm unable to get the 24 photo go to away when the answer isn't 24. I've tried all manner of hide/show slideUp/slideDown and slideToggle but I can't seem to get it in the right order or syntax. I'll be Slacking you tomorrow!


