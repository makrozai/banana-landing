'use strict';

(() => {
  // materialize initial
  M.AutoInit();

  //animation text
  if (document.body.contains(document.querySelector('input[type="password"]'))) {
    var inputPassword = document.querySelector('input[type="password"]');
    var parentPassword = inputPassword.parentNode;


    //create element
      var aBlock = document.createElement('i');
      aBlock.classList.add("materialize-icons");
      aBlock.classList.add("icon-eye");
      aBlock.classList.add("c-form__input-icon");
      parentPassword.appendChild(aBlock);

    //create interaction for input
    var elementInteraction = parentPassword.querySelector('.icon-eye');

    elementInteraction.onclick = function() {
      if (inputPassword.type == 'password') {
        inputPassword.type = 'text';
      }else{
        inputPassword.type = 'password';
      }
    }
  }

  //scroll animation
  if (document.body.contains(document.querySelector(".c-navbar--fixed"))) {
    document.addEventListener('scroll', (e) => {
      var navbar = document.querySelector(".c-navbar--fixed");
      if (window.scrollY >=  100) {
        navbar.classList.add("c-navbar--scrolling");
      }else{
        navbar.classList.remove("c-navbar--scrolling");
      }
    })
  }

  if (window.matchMedia("(max-width: 992px)").matches) {

    if (document.body.contains(document.querySelector(".c-carousel-mobile"))){
      /*carousel*/
      var CarouselM = document.querySelector('.c-carousel-mobile');
      var mobileCarousel = CarouselM.querySelector('.c-carousel-mobile__elements');
      var mobileCarouselItem = mobileCarousel.querySelectorAll('li');

      //mobileCarousel.scrollTo( 100, 0 );

      //creacion de indicadores
        addIndicators(CarouselM, mobileCarouselItem , 'c-indicators');
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

      /*end carousel*/
    }

  }
  if (document.body.contains(document.querySelector(".c-animation-text-fade"))) {
    var animationTextFade = document.querySelector(".c-animation-text-fade");
    var animationTextFadeItem = animationTextFade.querySelectorAll('li');

    animationTextFadeItem[0].classList.add("active");

    animationTextFadeItem.forEach((element) => {
      var aBlock = document.createElement('br');
      element.appendChild(aBlock);
    })
    createTextAnimation(animationTextFade, 4000);
  }


/* -----------------------function utilities----------------------*/

  // agrega clase active al dar click en botones
  function activeElement(elements, indexActive){
    //añade clase active al elemento
    //quita a los demas que no esten en el index
    elements.forEach((element) => {
      element.classList.remove('active');
    })
    elements[indexActive].classList.add('active');
  }
  //agrega indicadores en carusel
  function addIndicators(classParent,classElements, classIndicator){
    var aBlock = document.createElement('ul'); // crea el elemento
    aBlock.classList.add(classIndicator); // añade clase
    classParent.appendChild(aBlock); //agrega el indicador en el carousel
    var element = document.querySelector('.' + classIndicator);

    classElements.forEach(() =>{
      var aBlock = document.createElement('li');
      element.appendChild(aBlock);
    })
  }
  // crea el efecto de animacion de texto
  function createTextAnimation(textFade, time){
      var animationTextFadeItem = textFade.querySelectorAll('li');
      var loop = 1;
      setInterval((() => {
        //desaparece el contenedor
        textFade.classList.toggle("u-fade-out");
        setTimeout((() => {
          //cambia el valor y aparece el contenedor
          activeElement(animationTextFadeItem, loop);
          textFade.classList.toggle("u-fade-out");
        }),1000)
        //da al siguiente valor
        loop++;

        if (loop >= animationTextFadeItem.length) {
          loop = 0;
        }
      }), time);
  }
})()
