const slider = tns({
    container: '.review__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false,
    speed: 1000,

  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next'); 
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev'); 
  }); 

