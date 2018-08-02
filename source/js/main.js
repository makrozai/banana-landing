M.AutoInit();

if (window.matchMedia("(max-width: 992px)").matches) {
  console.log('hi tablet');

  let CarouselM = document.querySelector('.c-carousel-mobile');
  let mobileCarousel = CarouselM.querySelector('.c-carousel-mobile__elements');
  let mobileCarouselItem = mobileCarousel.querySelectorAll('li');
  let dotsCarousel = CarouselM.querySelectorAll('.c-indicators li');
  //mobileCarousel.scrollTo( 100, 0 );
  //console.log(dotsCarousel);
  //creacion de indicadores
    CarouselM.insertBefore(document.createElement('ul'));
  for (let [index, dotItem] of dotsCarousel.entries()) {
    dotItem.onclick = function(){
      //console.log(index);
      let move = CarouselM.offsetWidth;
      console.log(move);

      mobileCarousel.scroll({
        left: move * index,
        behavior: "smooth"
      });
    }
  }

}

//let a = () => console.log("Hello World");
