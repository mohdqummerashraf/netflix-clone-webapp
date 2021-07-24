const settings = {
  dot: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  touchMove: true,
  easing: 2000,
  lazyLoad: true,

  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 3, accessibility: false } },
    { breakpoint: 992, settings: { slidesToShow: 4 } },
    { breakpoint: 1240, settings: { slidesToShow: 6 } },
  ],
};

export default settings;