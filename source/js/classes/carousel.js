'use strict';

class Carousel{


  constructor(className, contentElements, classIndicator) {
    this.name = className;
    this.contentElements = contentElements;
    this.indicator = classIndicator;
  }


  createIndicator(){
    var classParent = document.querySelector('.' + this.name);
    var contentElements = document.querySelector('.' + this.contentElements);
    var aBlock = document.createElement('ul'); // crea el elemento
    aBlock.classList.add(this.indicator); // añade clase
    classParent.appendChild(aBlock); //agrega el indicador en el carousel
    var element = document.querySelector('.' + this.indicator);

     mobileCarouselItem.forEach(() =>{
        var aBlock = document.createElement('li');
        element.appendChild(aBlock);
     })
  }

}
