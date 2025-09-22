(function ($) {
    "use strict";

    // mobile navbar toggle 

    let isNavVisible = true
    $("#menu-toggle").on("click", function () {
        const nav = $("nav");

        if (nav && isNavVisible) {
            nav.animate({ left: 0 }, "slow");
            $(".menu-icon").hide();
            $(".close-icon").show();
            $("body").css("overflow", "hidden");
            isNavVisible = false
        } else {
            nav.animate({ left: '-100%' }, "slow");
            $(".menu-icon").show();
            $(".close-icon").hide();
            $("body").css("overflow", "auto");
            isNavVisible = true
        }
    });



    // navigation dropdown
    $(".navigation__item").on("click", function (e) {
        e.preventDefault();

        const $dropdown = $(this).find(".navigation__dropdown");

        if ($dropdown.length) {
            $(".navigation__dropdown").not($dropdown).slideUp("slow");

            $dropdown.slideToggle("slow");
        }
    });


    if ($('.services__trending-slider').length > 0) {
        new Swiper(".services__trending-slider", {

            spaceBetween: 24,
            // speed: 2000,
            loop: true,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1200: {
                    slidesPerView: 3,
                }
            }
            // autoplay: {
            //     delay: 1,
            //     disableOnInteraction: true,
            // },
        });
    }
    if ($('.services__categories-slider').length > 0) {
        new Swiper(".services__categories-slider", {
            spaceBetween: 24,
            // speed: 2000,
            loop: true,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                }
            }
            // autoplay: {
            //     delay: 1,
            //     disableOnInteraction: true,
            // },
        });
    }

})(jQuery)