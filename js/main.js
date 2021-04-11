$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');

    });
    $('.menu__list-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');

    });

    $(window).scroll(function () {
        if (window.matchMedia("(max-width: 750px)").matches) {
            $('.menu__btn').removeClass('menu__btn--active');
            $(".menu__list").removeClass("menu__list--active");

        }
    });

    $('.invest__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/arrow-next.svg" alt=""></button>',
        infinite: true,
        focusOnSelect: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,

    });

    $('.invest__slider').on('click', function () {
        $(this).slick('slickNext');
    });
    $('.traffic__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        fade: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipe: true,
    });
    $('.traffic__slider').on('click', function () {
        $(this).slick('slickNext');
    });

});

wow = new WOW({

    mobile: false,

})
wow.init();
