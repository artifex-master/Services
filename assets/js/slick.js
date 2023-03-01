$(document).ready(function() {
  $('.slick-slider-top').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick-slider-bottom',
    responsive: [{
      breakpoint: '992px',
      settings: {

      }
    }]

  });

  $('.slick-slider-bottom').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slick-slider-top',
    arrows: false,
    responsive: [{
      breakpoint: '992',
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: '768',
      settings: {
        slidesToShow: 3
      }
    }]


    

  });



});