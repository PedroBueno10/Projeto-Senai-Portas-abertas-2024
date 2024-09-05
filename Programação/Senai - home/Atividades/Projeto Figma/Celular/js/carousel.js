var swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  spaceBetween: 50,
  slidesPerView: 2,
  direction: 'horizontal',
  loop: false,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  debugger: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
  /*
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }*/
  
});