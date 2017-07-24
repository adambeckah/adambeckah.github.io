$('#submit').click(function(){
	var  a = parseFloat($('#a').val());
	var b = parseFloat($('#b').val());

	if (a > b) {
		$('#comparison').html('>');
	} else if (a < b) {
		$('#comparison').html('<');
	} else if (a == b) {
		$('#comparison').html('=');
	} else {
		$('#comparison').html('what are you doing?');
	}

});