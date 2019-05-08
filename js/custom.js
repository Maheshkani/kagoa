
$(function () {
  $('#whatsnew').scrollbox({
    linear: true,
    step: 1,
    delay: 0,
    speed: 50
  });
});

 $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     nav: true,
     dots: false,
     autoplay: true,
	 autoplayHoverPause: true,
     autoplayTimeout: 2000,
     navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 1
         },
         1000: {
             items: 1
         }
     }
 });



	$(".slider-wrapper").owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        pagination: true,
        animateOut: 'fadeOut',
        loop: true,
        navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 1000
    });
