jQuery(document).ready(function($) {
  $(".variable-width").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
