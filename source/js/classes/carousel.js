'use strict';

class Carousel{


  constructor(className, contentElements, classIndicator) {
    this.className = className;
    this.contentElements = contentElements;
    this.classIndicator = classIndicator;
  }

  initial(){
    var CarouselM = document.querySelector('.' + this.className);
    var mobileCarousel = CarouselM.querySelector('.' + this.contentElements);
    var mobileCarouselItem = mobileCarousel.querySelectorAll('li');

    this.addIndicators(mobileCarouselItem);

    var dotsCarousel = CarouselM.querySelectorAll('.' + this.classIndicator + ' li');

    for (let [index, dotItem] of dotsCarousel.entries()) {
      dotItem.onclick = function(){
        this.activeElement(dotsCarousel, index);
        var move = CarouselM.offsetWidth;

        mobileCarousel.scroll({
          left: move * index,
          behavior: "smooth"
        });
      }
    }
  }

  addIndicators(mobileCarouselItem){
    var aBlock = document.createElement('ul'); // crea el elemento
    aBlock.classList.add(this.classIndicator); // añade clase
    classParent.appendChild(aBlock); //agrega el indicador en el carousel
    var element = document.querySelector('.' + this.classIndicator);

    mobileCarouselItem.forEach(() =>{
      var aBlock = document.createElement('li');
      element.appendChild(aBlock);
    })
  }
  activeElement(elements, indexActive){
    //añade clase active al elemento
    //quita a los demas que no esten en el index
    elements.forEach((element) => {
      element.classList.remove('active');
    })
    elements[indexActive].classList.add('active');
  }
}
