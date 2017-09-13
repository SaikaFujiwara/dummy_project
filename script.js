$(document).ready (
    function() {
    	$('.js-slider').slick();

    }

	);

$('.gototop').on('click',function(){
	$('html, body').animate({
		scrollTop: 0
	}, 1000)
})