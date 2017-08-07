var scrollTop = 0;
var $firstImages = $('.first-images');

var pullQuote1Left = 0;
var quotesPulledToPosition = {
	firstQuote: false,
	pullQuote1: $('.pull-quote-1'),
	secondQuote: false,
	pullQuote2: $('.pull-quote-2'),
	thirdQuote: false,
	pullQuote3: $('.pull-quote-3'),
	fourthQuote: false,
	pullQuote4: $('.pull-quote-4'),
	fifthQuote: false,
	pullQuote5: $('.pull-quote-5'),
	sixthQuote: false,
	pullQuote6: $('.pull-quote-6'),
	seventhQuote: false,
	pullQuote7: $('.pull-quote-7')


};



$(window).scroll(function () {
	// possibly base actions on scrollTop + window.height

	scrollTop = $(window).scrollTop();
	

	topImageFade();

	quotePull(3500, 5000, 'pullQuote1', 'firstQuote' , 'left');

	quotePull(4000, 6000, 'pullQuote2', 'secondQuote' , 'right');

	quotePull(6500, 8500, 'pullQuote3', 'thirdQuote' , 'left');

	quotePull(7100, 9100, 'pullQuote4', 'fourthQuote' , 'right');

	quotePull(8500, 10500, 'pullQuote5', 'fifthQuote' , 'left');

	quotePull(8800, 10800, 'pullQuote6', 'sixthQuote' , 'right');

	quotePull(14300, 16300, 'pullQuote7', 'seventhQuote' , 'left');

});



function topImageFade() {
	if (scrollTop > 100) {
		$firstImages.css('opacity' , 1 - (scrollTop - 100) / 700);
	}
}

// function firstQuotePullLeft () {
// 	if (scrollTop > 2750 && scrollTop < 4000) {

// 		pullQuote1Left = 100 - (scrollTop - 2750);

// 		console.log(pullQuote1Left);

// 		if (pullQuote1Left >= 0 && !hasPullQuote1LeftBeenPulledLeft) {
// 			$pullQuote1.css('left' , pullQuote1Left + '%');
// 		} else {
// 			hasPullQuote1LeftBeenPulledLeft = true;
// 			$pullQuote1.css('left' , 0);
// 		}
// 	}
// }


function quotePull (minScrollTop, maxScrollTop, $pullQuote, quoteNum, direction ) {
	console.log(scrollTop);
	if (scrollTop > minScrollTop && scrollTop < maxScrollTop) {

		pullQuoteOffset = 100 - ((scrollTop - minScrollTop) * .4);

		if (pullQuoteOffset >= 0 && !quotesPulledToPosition[quoteNum]) {
			quotesPulledToPosition[$pullQuote].css(direction , pullQuoteOffset + '%');
		} else {
			quotesPulledToPosition[quoteNum] = true;

			quotesPulledToPosition[$pullQuote].css(direction , 0);
		}
	}
}




