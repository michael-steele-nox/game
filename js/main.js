$(function () {

	$('.pop-up__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.slider__box').slick({
		prevArrow: '<img src="images/slider/arrow-left.png" alt="arrow-left" class="slider__arrow slider__arrow-left">',
		nextArrow: '<img src="images/slider/arrow-right.png" alt="arrow-right" class="slider__arrow slider__arrow-right">',

		responsive: [
			{
				breakpoint: 486,
				settings: {
					arrows: false,
				}
			}
		]


	});

	$('.menu-btn').on('click', function () {
		$('.menu__list').toggleClass('active');
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$('#topBtn').fadeIn();
		} else {
			$('#topBtn').fadeOut();
		}
		
	});
	
	$("#topBtn").click(function () {
		$('html, body').animate({scrollTop: 0}, 500);
	});

	

});
