let slides = document.querySelectorAll(".slider__slide");
let buttonPrev = document.querySelector(".slider__button-prev");
let buttonNext = document.querySelector(".slider__button-next");

let counter = 0;
let number = 0;

function recursion(number) {
  for (let i = 0; i < slides.length; i++) {
    slides[i] === slides[number]
      ? (slides[i].style.display = "flex")
      : (slides[i].style.display = "none")
  }
  
  buttonNext.onclick = () => {
    number++;

    if (number >= 3) {
      number = 0;
    }

    recursion(number);
  }

  buttonPrev.onclick = () => {
    number--;

    if (number < 0) {
      number = 2;
    }

    recursion(number);
  }
}

recursion(counter);