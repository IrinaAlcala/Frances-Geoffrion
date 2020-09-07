$(window).on('load', function() {

    "use strict";

    var countNumber = $(".count-number");
    var preLoader = $('#loading');
    var mixItUp = $('#mixi-box');
    var fancybox = $('.fancybox');
    var acc = document.getElementsByClassName("accordion");

   
    countNumber.appear(function() {
        $(this).each(function() {
            var datacount = $(this).attr('data-count');
            $(this).find('.counter').delay(6000).countTo({
                from: 10,
                to: datacount,
                speed: 4000,
                refreshInterval: 50,
            });
        });
    });

   
    if (preLoader.length) {
        preLoader.fadeOut();
    }


   
    if (mixItUp.length) {
        mixItUp.mixItUp();
    }

   

    if (fancybox.length) {
        fancybox.fancybox();
    }


   

    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }

   

    owlCarouselInit();


});




function owlCarouselInit() {

    "use strict";

    var mainSlider = $('#main-slider');
    var testimonial = $('#testimony-slider');
    var partnerSlider = $('#pattern-slider');

   
    mainSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            5000: {
                items: 1
            }
        }
    });

    testimonial.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

  

    partnerSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });


}