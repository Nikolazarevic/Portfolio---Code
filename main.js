$(document).ready(function() {
	$(window).on('scroll', function() {
  	if($(document).scrollTop() > 100) {
    	$('#header').addClass('shrink');
    }
    else {
    $('#header').removeClass('shrink');
    }
  });
	$('.html').animate({width: '95%'}, 4000);
	$('.css').animate({width: '95%'}, 4000);
	$('.jQuery').animate({width: '40%'}, 4000);
	$('.JavaScript').animate({width: '30%'}, 4000);
	$('.microsoft').animate({width: '95%'}, 4000);
	$('.illustrator').animate({width: '65%'}, 4000);
	$('.photoshop').animate({width: '90%'}, 4000);
	$('.flash').animate({width: '40%'}, 4000);
	$('.xd').animate({width: '90%'}, 4000);
	$('.sass').animate({width: '95%'}, 4000);
	$('.ajax').animate({width: '20%'}, 4000);
	$('.git').animate({width: '20%'}, 4000);
});