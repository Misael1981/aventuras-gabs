var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    loop: true,
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



