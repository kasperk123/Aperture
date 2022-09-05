$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 1500,

        responsive: {
            0: {
                items: 1
            },
            428: {
                items: 3
            },


            1000: {
                items: 5
            }
        }
    });
});