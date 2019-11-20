$(document).ready(function() {

    var catalogSlider = undefined;

    function initCatalog() {
        var screenWidth = $(window).width();
        if (screenWidth < 1280 && catalogSlider == undefined) {
            catalogSlider = new Swiper('.catalog', {
                slidesPerView: 4,
                spaceBetween: 12,
                loop: false,
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    991: {
                        slidesPerView: 3
                    },
                    1279: {
                        slidesPerView: 3
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination-catalog',
                    clickable: true,
                },
            });
        } else if (screenWidth > 1279 && catalogSlider != undefined) {
            catalogSlider.destroy();
            catalogSlider = undefined;
            $('.swiper-wrapper_catalog').removeAttr('style');
            $('.swiper-slide_catalog').removeAttr('style');
        }
    }

    //Swiper plugin initialization
    initCatalog();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initCatalog();
    });

    $("#polzunok").slider({
        animate: "slow",
        min: 1000000,
        max: 10000000,
        range: true,
        values: [ 2000000, 7000000 ],
        step: 10000,
        slide : function(event, ui) {
            $("#result-polzunok").html( "<span>" + ui.values[ 0 ] + "</span>" + "<span>" + ui.values[ 1 ] + "</span>");
        }
    });
    $( "#result-polzunok" ).html("<span>" + $("#polzunok").slider("values", 0) + "</span>" + "<span>" + $("#polzunok").slider("values", 1) + "</span>");

    $('.filter-rooms__item').click(function() {
        $('.filter-rooms__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.select-custom select').select2();

    $(function() {
        $('.minimized').click(function(event) {
            var i_path = $(this).attr('src-big');
            $('body').append('<div class="overlay"></div><div class="magnify"><img src="' + i_path + '"><div class="close-popup"></div></div>');
            // $('#magnify').css({
            //     left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            //     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            //     top: ($(window).height() - $('#magnify').outerHeight()) / 2
            // });
            $('.overlay, .magnify').fadeIn('fast');
        });

        $('body').on('click', '.close-popup, .overlay', function(event) {
            event.preventDefault();

            $('.overlay, .magnify').fadeOut('fast', function() {
                $('.close-popup, .magnify, .overlay').remove();
            });
        });
    });

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

    $('.like-slider').click(function() {
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
