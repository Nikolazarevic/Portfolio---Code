$(document).ready(function() {
	$(window).on('scroll', function() {
  	if($(document).scrollTop() > 100) {
    	$('#header').addClass('shrink');
    }
    else {
    $('#header').removeClass('shrink');
    }
  });
// 	var fas = $('.fas');
// 	klik = 0;
// 	boja();
// 	function boja() {
// 	fas.on('click', function(){
// 		klik++;
//         $('.navBar').slideToggle('slow');
//         $('.toggle').css('background-color','rgba(23, 28, 37, 0.9)');
//     if (klik == 2) {
//         $('.toggle').delay('500').css('background-color','transparent');
//     	klik = 0;
//     }
//     });
// }
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
	clicked = true;
	$('.fas').on('click', function() {
		$('.navBar').slideToggle('slow');
		// if(clicked) {
		// 	$('.toggle').css('background-color', 'red');
		// 	clicked = false;
		// } else {k
		// 	$('.toggle').css('background-color', 'transparent');
		// 	clicked = true;
		// }
	});
	$( ".work" ).hover( function() {
    $(this).find(".mask").css("opacity", "1");
  	}, function() {
    $(this).find(".mask").css("opacity", "0");
  }
);
});