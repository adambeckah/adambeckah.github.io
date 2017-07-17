// var yourAge = $('#age').val();
// var howOld = $('#max-age').val();
// var howMany = $('#num-per-day').val();
// var favDrink = $('#item').val();
// var numDrinks = (howOld - yourAge) * 365 * howMany;

$('#click-me').click(function(){
	var yourAge = $('#age').val();
	var howOld = $('#max-age').val();
	var howMany = $('#num-per-day').val();
	var favDrink = $('#item').val();
	var numDrinks = (howOld - yourAge) * 365 * howMany;
	$('#solution').html(numDrinks);
	$('#drink').html(favDrink);
});