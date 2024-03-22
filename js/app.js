AOS.init();

// new course slider start
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 15,
    direction: 'horizontal',
    loop: true,

    autoplay : {
        delay: 1500,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });
// new course slider ends
  