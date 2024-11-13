var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
    prev: {
        shadow: true,
        translate: [0, 0, -400],
    },
    next: {
        translate: ["100%", 0, 0],
    },
    },
    autoplay: {
    delay: 4000,  
},
});

var newSwiper = new Swiper(".myNewSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });