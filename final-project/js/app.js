// Variables
var scrollTop = 0;
var $hero = $('.hero');

var pullQuote1Left = 0;
var quotesPulledToPosition = {
	firstQuote: false,
	pullQuote1: $('.pull-quote-1'),
	thirdQuote: false,
	pullQuote3: $('.pull-quote-3'),
	fifthQuote: false,
	pullQuote5: $('.pull-quote-5'),
	seventhQuote: false,
	pullQuote7: $('.pull-quote-7')
};

// Scroll Stuff

$(window).scroll(function() {

	scrollTop = $(window).scrollTop();
	

	topImageFade();

	quotePull(3500, 5000, 'pullQuote1', 'firstQuote' , 'left');

	quotePull(5300, 7300, 'pullQuote3', 'thirdQuote' , 'right');

	quotePull(7000, 9000, 'pullQuote5', 'fifthQuote' , 'left');

	quotePull(10200, 12200, 'pullQuote7', 'seventhQuote' , 'right');

});

// Hero Fade

function topImageFade() {
	if (scrollTop > 100) {
		$hero.css('opacity' , 1 - (scrollTop - 100) / 700);
	}
}


// Pull Quotes

function quotePull (minScrollTop, maxScrollTop, $pullQuote, quoteNum, direction ) {
	console.log(scrollTop);
	if (scrollTop > minScrollTop && scrollTop < maxScrollTop) {

		pullQuoteOffset = 100 - ((scrollTop - minScrollTop) * .25);

		if (pullQuoteOffset >= 0 && !quotesPulledToPosition[quoteNum]) {
			quotesPulledToPosition[$pullQuote].css(direction , pullQuoteOffset + '%');
		} else {
			quotesPulledToPosition[quoteNum] = true;

			quotesPulledToPosition[$pullQuote].css(direction , 0);
		}
	}
}
// Nav Change

	$(window).scroll(function(){
		console.log($(window).scrollTop());

		if ($(window).scrollTop() > 50) {
			$('nav').addClass('nav-small');
			$('.logo').addClass('logo-small');
			$('.nav-words').hide();
			$('.mobile-nav').css('padding-top' , '25px')
		} else {
			$('nav').removeClass('nav-small');
			$('.logo').removeClass('logo-small');
			$('.nav-words').css('display' , 'flex');
			$('.mobile-nav').css('padding-top' , '50px')
		}

	});


// Responsive Nav

	$(window).resize(function () {
		console.log($(window).width());

		if ($(window).width() > '1000') {
			$('#large-nav').show();
			$('#burger').hide();
			$('.mobile-nav').hide()
		} else {
			$('#large-nav').hide();
			$('#burger').show();

		}
	})


	$('#burger').click(function () {
		$('.mobile-nav').slideToggle();
	});



