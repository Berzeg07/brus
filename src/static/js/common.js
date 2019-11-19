$(document).ready(function() {

    $('.plan-choose').click(function() {
        $('.plan-choose').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.genplan-tab').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.plan-select__btn_genplan').click();

    $('.corpuses__slide-tabs button').click(function() {
        $('.plan-select__btn').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('data-tab');
        var adress = $(this).attr('data-adress');
        $('.corpuse-adress').html(adress);
        $('.corpuses__slider-wrap').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.corpuses__slide-tabs button:first').click();

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.dropdownmenu').fadeToggle();
    });

    $(".phone-inp").mask("7 (999) 999-99-99");

    $('.like-slider').click(function(){
        $(this).toggleClass('active');
    });

    var innerSlider = new Swiper('.inner-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-inner',
            clickable: true,
        },
    });

    var bannerSlider = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var fastActionSlider = new Swiper('.fast-action__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var bannerSlider = new Swiper('.advantages-slider', {
        slidesPerView: 6,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            599: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1599: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1799: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1800: {
                slidesPerView: 6,
                spaceBetween: 40,
            }
        }
    });

    var constSlider = new Swiper('.const-slider', {
        slidesPerView: 6,
        spaceBetween: 12,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            599: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1279: {
                slidesPerView: 3
            },
            1280: {
                slidesPerView: 4
            },
            1599: {
                slidesPerView: 4
            },
            1600: {
                slidesPerView: 5
            },
            1799: {
                slidesPerView: 5
            },
            1800: {
                slidesPerView: 6
            }
        }
    });

    var bankSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();

        if (screenWidth > 991 && bankSlider == undefined) {

            bankSlider = new Swiper('.banks-slider', {
                slidesPerView: 9,
                spaceBetween: 80,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next-bank',
                    prevEl: '.swiper-button-prev-bank',
                },
                breakpoints: {
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1279: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1599: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                    1799: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                    1800: {
                        slidesPerView: 8,
                        spaceBetween: 80,
                    },
                    1919: {
                        slidesPerView: 8,
                        spaceBetween: 80,
                    }
                }
            });

        } else if (screenWidth < 992 && bankSlider != undefined) {
            bankSlider.destroy();
            bankSlider = undefined;
            $('.swiper-wrapper_bank').removeAttr('style');
            $('.swiper-slide_bank').removeAttr('style');
        }
    }

    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initSwiper();
    });



    var owl = $(".corpuses-slider_8");
    owl.owlCarousel({
        loop: false,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false,
        responsive: {
            320: {
                items: 1,
                margin: 36
            },
            600: {
                items: 2,
                margin: 20
            },
            992: {
                items: 3,
                margin: 20
            },
            1280: {
                items: 3,
                margin: 36
            }
        }
    });

    var owl2 = $(".corpuses-slider_7");
    owl2.owlCarousel({
        loop: false,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false,
        responsive: {
            320: {
                items: 1,
                margin: 18
            },
            600: {
                items: 2,
                margin: 20
            },
            1280: {
                items: 2,
                margin: 36
            }
        }
    });
    //
});
