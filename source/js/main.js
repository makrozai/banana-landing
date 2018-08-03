M.AutoInit();

if (window.matchMedia("(max-width: 992px)").matches) {

  var CarouselM = document.querySelector('.c-carousel-mobile');
  var mobileCarousel = CarouselM.querySelector('.c-carousel-mobile__elements');
  var mobileCarouselItem = mobileCarousel.querySelectorAll('li');

  //mobileCarousel.scrollTo( 100, 0 );

  //creacion de indicadores
    addIndicators(CarouselM, 'c-indicators');
    var dotsCarousel = CarouselM.querySelectorAll('.c-indicators li');

  // responde al click y mueve los elementos con efecto smooth
    for (let [index, dotItem] of dotsCarousel.entries()) {
      dotItem.onclick = function(){
        activeElement(dotsCarousel, index);
        var move = CarouselM.offsetWidth;

        mobileCarousel.scroll({
          left: move * index,
          behavior: "smooth"
        });
      }
    }

  function addIndicators(classParent, classIndicator){
    var aBlock = document.createElement('ul'); // crea el elemento
    aBlock.classList.add(classIndicator); // añade clase
    classParent.appendChild(aBlock); //agrega el indicador en el carousel
    var element = document.querySelector('.' + classIndicator);

     mobileCarouselItem.forEach(() =>{
        var aBlock = document.createElement('li');
        element.appendChild(aBlock);
     })
  }

  function activeElement(elements, indexActive){
    //añade clase active al elemento
    //quita a los demas que no esten en el index
    elements.forEach((element) => {
      element.classList.remove('active');
    })
    elements[indexActive].classList.add('active');
  }
}

//let a = () => console.log("Hello World");
