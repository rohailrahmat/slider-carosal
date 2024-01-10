
    let swiper = new Swiper(".slider-content", {
      slidesPerView: 3,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        DynamicBullets:true,
      },
      navigation:{
        nextEl:"swiper-button-next",
        nextEl:"swiper-button-prev",
      },
    });