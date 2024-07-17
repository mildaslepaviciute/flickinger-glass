var swiper = new Swiper(".swiperGallery", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      loop: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });