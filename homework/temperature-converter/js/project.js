$('#f-button').click(function() {
	var farVal = $('#f-input').val();
	$('#c-answer').html((farVal - 32) * 5 / 9);
});

$('#c-button').click(function() {
	var celVal = $('#c-input').val();
	$('#f-answer').html(celVal * 9 / 5 +32);
});