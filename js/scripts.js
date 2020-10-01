$(document).ready(function () {
  $(".header__toggle").click(function (event) {
    event.preventDefault();

    $(".header__toggle").toggleClass("active");
    $(".header__nav").toggleClass("active");
  });

  $(".best-seller__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".popup-link").magnificPopup({
    type: "inline",
  });
});
