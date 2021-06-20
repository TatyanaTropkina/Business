$(function () {
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('active');
        $('.menu__list').toggleClass('active');
		$('.header__bg').toggleClass('active');
    });
    $('.menu__list-link').on('click', function () {
        $('.menu__btn').removeClass('active');
        $('.menu__list').removeClass('active');
    });
    $(window).scroll(function () {
        if (window.matchMedia("(max-width: 769px)").matches) {
            $('.menu__btn').removeClass('active');
            $(".menu__list").removeClass("active");
        }
    });
    $('.invest__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/arrow-next.svg" alt=""></button>',
        infinite: true,
        speed: 2000,
		autoplay: true,
    });
    $('.traffic__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        fade: true,
        autoplaySpeed: 3000, 
    });
let trafficSlider = $('.traffic__slider');
$(window).scroll(function(){
	if ($(this).scrollTop()> trafficSlider.offset().top - 425) {
	trafficSlider.addClass('anim');
 }
});
	let invest = $('.invest')
$(window).scroll(function(){
	if($(this).scrollTop()> invest.offset().top - 200) {
		invest.addClass('anim');
	}
});
	let featureDots = $('.feature__img-wrapper');
	let featureInner = $('.feature__inner');
	let feature = $('.feature');
$(window).scroll(function () {
	if ($(this).scrollTop() > feature.offset().top - 300) {
		featureInner.addClass('anim');
		featureDots.addClass('anim');
	}
});
});
wow = new  WOW({
	mobile: false})
wow.init();


