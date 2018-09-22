'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {
  // materialize initial
  M.AutoInit();

  //scroll animation
  if (document.body.contains(document.querySelector(".c-navbar--fixed"))) {
    document.addEventListener('scroll', function (e) {
      var navbar = document.querySelector(".c-navbar--fixed");
      if (window.scrollY >= 50) {
        navbar.classList.add("c-navbar--scrolling");
      } else {
        navbar.classList.remove("c-navbar--scrolling");
      }
    });
  }

  if (window.matchMedia("(max-width: 992px)").matches) {

    if (document.body.contains(document.querySelector(".c-carousel-mobile"))) {
      /*carousel*/
      var CarouselM = document.querySelector('.c-carousel-mobile');
      var mobileCarousel = CarouselM.querySelector('.c-carousel-mobile__elements');
      var mobileCarouselItem = mobileCarousel.querySelectorAll('li');

      //mobileCarousel.scrollTo( 100, 0 );

      //creacion de indicadores
      addIndicators(CarouselM, mobileCarouselItem, 'c-indicators');
      var dotsCarousel = CarouselM.querySelectorAll('.c-indicators li');

      // responde al click y mueve los elementos con efecto smooth
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              dotItem = _step$value[1];

          dotItem.onclick = function () {
            activeElement(dotsCarousel, index);
            var move = CarouselM.offsetWidth;

            mobileCarousel.scroll({
              left: move * index,
              behavior: "smooth"
            });
          };
        };

        for (var _iterator = dotsCarousel.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }

        /*end carousel*/
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }
  //animation text fade
  if (document.body.contains(document.querySelector(".c-animation-text-fade"))) {
    var animationTextFade = document.querySelector(".c-animation-text-fade");
    var animationTextFadeItem = animationTextFade.querySelectorAll('li');

    animationTextFadeItem[0].classList.add("active");

    createTextAnimation(animationTextFade, 4000);
  }

  //input password
  if (document.body.contains(document.querySelector('input[type="password"]'))) {
    var inputPassword = document.querySelector('input[type="password"]');
    var parentPassword = inputPassword.parentNode;

    //create element
    var aBlock = document.createElement('i');
    aBlock.classList.add("materialize-icons");
    aBlock.classList.add("icon-eye");
    aBlock.classList.add("c-input__password-icon");
    parentPassword.appendChild(aBlock);

    //create interaction for input
    var elementInteraction = parentPassword.querySelector('.icon-eye');

    elementInteraction.onclick = function () {
      if (inputPassword.type == 'password') {
        inputPassword.type = 'text';
      } else {
        inputPassword.type = 'password';
      }
    };
  }

  /* -----------------------function utilities----------------------*/

  // agrega clase active al dar click en botones
  function activeElement(elements, indexActive) {
    //añade clase active al elemento
    //quita a los demas que no esten en el index
    elements.forEach(function (element) {
      element.classList.remove('active');
    });
    elements[indexActive].classList.add('active');
  }
  //agrega indicadores en carusel
  function addIndicators(classParent, classElements, classIndicator) {
    var aBlock = document.createElement('ul'); // crea el elemento
    aBlock.classList.add(classIndicator); // añade clase
    classParent.appendChild(aBlock); //agrega el indicador en el carousel
    var element = document.querySelector('.' + classIndicator);

    classElements.forEach(function () {
      var aBlock = document.createElement('li');
      element.appendChild(aBlock);
    });
  }
  // crea el efecto de animacion de texto
  function createTextAnimation(textFade, time) {
    var animationTextFadeItem = textFade.querySelectorAll('li');
    var loop = 1;
    setInterval(function () {
      //desaparece el contenedor
      textFade.classList.toggle("u-fade-out");
      setTimeout(function () {
        //cambia el valor y aparece el contenedor
        activeElement(animationTextFadeItem, loop);
        textFade.classList.toggle("u-fade-out");
      }, 500);
      //da al siguiente valor
      loop++;

      if (loop >= animationTextFadeItem.length) {
        loop = 0;
      }
    }, time);
  }
})();