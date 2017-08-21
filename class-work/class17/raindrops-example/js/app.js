var dropFrequency = 0;

jQuery('#raindrops-1').raindrops(
	{color:'#8f42f4',
	canvasHeight:250,
	rippleSpeed: 0.01,
	frequency: dropFrequency,
	density: 0});

$('#raindrops-1').click(function(){
	jQuery('#raindrops-1').raindrops(
	{frequency: dropFrequency});
	dropFrequency = dropFrequency +5;

});