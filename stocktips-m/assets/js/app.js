(function ($) {
    "use strict";
    $(document).ready(function () {
        /*---------------------------------------------------
            Isotop filter course 
        ----------------------------------------------------*/

        $("#cta-input").click(function(){
            $("#show-hide-submenu").toggleClass('show-input');
        });

        // init Isotope
        var $grid = $('.port-filter').isotope({
            // options
        });
        // filter items on button click
        $('.tab-btn-wrapper').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        

        $(".progress-bar").loading();


        $('.popup-hero').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // hero slider
        $('.active-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-arrow-right"></i></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-arrow-left"></i></button>'
        });


        /*---------------------------------------------------
            mobile menu 
        ----------------------------------------------------*/
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199"
        });

        $('#r-mobile-menu').meanmenu({
            meanMenuContainer: '.r-mobile-menu',
            meanScreenWidth: "1199"
        });


        /*---------------------------------------------------
            portfolio slider
        ----------------------------------------------------*/
        $('.portfolio-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

         /*---------------------------------------------------
            team slider
        ----------------------------------------------------*/
        $('.home-2-team-slider').slick({
            dots: false,
            infinite: true,
            arrows: false,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        /*---------------------------------------------------
            home 2 testimonial carousel
        ----------------------------------------------------*/
        $('.home-2-testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

             /*---------------------------------------------------
            home 3 testimonial carousel
        ----------------------------------------------------*/
        $('.home-3-testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        
        /*---------------------------------------------------
            home 2 brand carousel
        ----------------------------------------------------*/
        $('.home-2-brand-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "",
            nextArrow: "",
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        /*---------------------------------------------------
            Home two filter carousel
        ----------------------------------------------------*/
        $('.home-two-filter-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            ]
        });
        /*---------------------------------------------------
            home two testimonial carousel
        ----------------------------------------------------*/
        $('.home-two-testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });


    });


    /*---------------------------------------------------
        back to top button
    ----------------------------------------------------*/
    $(".top-btn").click(function () {
        $('html,body').animate({
            "scrollTop": "0"
        }, 500)
    });

    /*---------------------------------------------------
          back to top button fade in/out
      ----------------------------------------------------*/
    $(window).scroll(function () {
        var scrollValue = $(this).scrollTop();
        if (scrollValue >= 500) {
            $(".top-btn").fadeIn();
        } else {
            $(".top-btn").fadeOut();
        }
    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).load(function () {
        $("#loading").fadeOut(500);



    })

    /*---------------------------------------------------
       video popup
    ----------------------------------------------------*/
    $('.popup-vdo').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }

                // you may add here more sources

            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
    });

    /*---------------------------------------------------
        nice select
    ----------------------------------------------------*/
    $('select').niceSelect();

}(jQuery));