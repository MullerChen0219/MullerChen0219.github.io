$(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            responsiveClass: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            768: {
                items: 3,
                nav: true,
                loop: true
            },
            1200: {
                items: 6,
                nav: true,
                loop: true
            },
        },
    });

    $(".owl-carousel-center").owlCarousel({
            items: 5,
            center: true,
            loop: true,
            margin: 10,
            responsiveClass: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            768: {
                items: 3,
                nav: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                loop: true
            },
        },
    });
});
