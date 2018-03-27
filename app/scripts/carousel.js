 $(document).ready(function () {
     $('.carousel').slick({
         slidesToShow: 4
         , slidesToScroll: 1
         , responsive: [
             {
                 breakpoint: 1024
                 , settings: {
                     slidesToShow: 3
                     , slidesToScroll: 1
                     , infinite: true
                 }
    }
             , {
                 breakpoint: 600
                 , settings: {
                     slidesToShow: 2
                     , slidesToScroll: 1
                 }
    }
             , {
                 breakpoint: 480
                 , settings: {
                     slidesToShow: 1
                     , slidesToScroll: 1
                 }
    }
    
  ]
     });
 });