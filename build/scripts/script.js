 $(document).ready(function () {
     var carousel = $("#carousel");
     carousel.owlCarousel();
     $('#js-prev').click(function () {
         carousel.trigger('owl.prev');
         return false;
     });
     $('#js-next').click(function () {
         carousel.trigger('owl.next');
         return false;
     });
     carousel.owlCarousel({
         items: 10,
         itemsDesktop: [1400, 5],
         itemsDesktopSmall: [900, 3],
         itemsTablet: [600, 2],
         itemsMobile: false
     });
 });