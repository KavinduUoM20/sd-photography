"use strict";

window.addEventListener('load', function() {





//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-single').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: false,
    items: 1,
    dots: true,
    navText: ['',''],
    rewind: true
});




//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-4item').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['',''],
    dotsEach: true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    startPosition:1,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1200: {
            items: 3
        },
        1600: {
            items: 4
        }
    }

});



//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-5item-stpad').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['',''],
    dotsEach: true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    startPosition:1,
    responsive: {
        0: {
            items: 1,
            stagePadding: 30
        },
        400: {
            items: 2,
            stagePadding: 30
        },
        700: {
            items: 3,
            stagePadding: 30
        },
        1200: {
            items: 4,
            stagePadding: 150
        },
        1600: {
            items: 5,
            stagePadding: 150
        }
    }

});


});
