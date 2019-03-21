$(document).ready(function() {
	$(window).on('scroll', function() {
		var y = $(this).scrollTop();
	  	if( y >= 100) {
	    	$('#header').addClass('shrink');
	    }
	    else {
	    	$('#header').removeClass('shrink');
	    }
		if ( y >= 1350 ) {
			$('.htmlScale').animate({
				width: '95%'
			}, 1900);
			$('.cssValue').fadeIn(3000);
		};
		if ( y >= 1400 ) {
			$('.cssScale').animate({
				width: '95%'
			}, 1900);
			$('.cssValue').fadeIn(3000);
		};
		if ( y >= 1450 ) {
			$('.jqueryScale').animate({
				width: '40%'
			}, 1900);
			$('.jqueryValue').fadeIn(3000);
		};
		if ( y >= 1500 ) {
			$('.javascriptScale').animate({
				width: '30%'
			}, 1900);
			$('.javascriptValue').fadeIn(3000);
		};
		if ( y >= 1600 ) {
			$('.msScale').animate({
				width: '95%'
			}, 1900);
			$('.msValue').fadeIn(3000);
		};
		if ( y >= 1700 ) {
			$('.illustratorScale').animate({
				width: '65%'
			}, 1900);
			$('.illustratorValue').fadeIn(3000);
		};
		if ( y >= 1800 ) {
			$('.photoshopScale').animate({
				width: '90%'
			}, 1900);
			$('.photoshopValue').fadeIn(3000);
		};
		if ( y >= 1850 ) {
			$('.flashScale').animate({
				width: '40%'
			}, 1900);
			$('.flashValue').fadeIn(3000);
		};
		if ( y >= 1900 ) {
			$('.adobexdScale').animate({
				width: '90%'
			}, 1900);
			$('.adobexdValue').fadeIn(3000);
		};
		if ( y >= 2000 ) {
			$('.sassScale').animate({
				width: '95%'
			}, 1900);
			$('.sassValue').fadeIn(3000);
		};
		if ( y >= 2050 ) {
			$('.ajaxScale').animate({
				width: '20%'
			}, 1900);
			$('.ajaxValue').fadeIn(3000);
		};
		if ( y >= 2100 ) {
			$('.gitScale').animate({
				width: '20%'
			}, 1900);
			$('.gitValue').fadeIn(3000);
		// // };
		// if ($('.htmlScale').css('margin-top','50%')){
		// $('.htmlScale').animate({
		// 	width: '95%'
		// }, 1900);
		// $('.htmlValue').fadeIn(3000);
	};
  });
	




	$('.fas').on('click', function() {
		$('.navBar').slideToggle('slow');
	});
	$( ".work" ).hover( function() {
    $(this).find(".mask").css("opacity", "1");
  	}, function() {
    $(this).find(".mask").css("opacity", "0");
  }
);
});