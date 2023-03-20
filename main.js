const mySwiper = new Swiper(".swiper-container", {
  slidePerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

const btnPrev = document.querySelector(".swiper-button-prev"),
  btnNext = document.querySelector(".swiper-button-next"),
  sliderText = document.querySelectorAll(".slide-text"),
  sliderNumber = document.querySelector(".swiper-slide .number");

btnPrev.addEventListener("click", slidePrev);
btnNext.addEventListener("click", slideNext);

function slideNext() {
  const slideActiveText = document.querySelector(
    ".swiper-slide-active .slide-text"
  );
  const slidePrevText = document.querySelector(
    ".swiper-slide-prev .slide-text"
  );

  slidePrevText.classList.remove("active-text");
  slideActiveText.classList.add("active-text");
}

function slidePrev() {
  const slideActiveText = document.querySelector(
    ".swiper-slide-active .slide-text"
  );
  const slideNextText = document.querySelector(
    ".swiper-slide-next .slide-text"
  );

  slideNextText.classList.remove("active-text");
  slideActiveText.classList.add("active-text");
}
