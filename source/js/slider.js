var btn_before = document.querySelector(".slider_toggle-before");
var scale_move = document.querySelector(".slider__scale");
var image_after = document.querySelector(".slider__image--after");
var image_before = document.querySelector(".slider__image--before");
  btn_before.addEventListener("click", function (evt) {
  evt.preventDefault();
  scale_move.classList.remove("slider__scale--right");
  scale_move.classList.add("slider__scale--left");
  image_after.classList.remove("slider__image--active");
  image_before.classList.add("slider__image--active");
});
var btn_after = document.querySelector(".slider_toggle-after");
var scale_move = document.querySelector(".slider__scale");
var image_before = document.querySelector(".slider__image--before");
var image_after = document.querySelector(".slider__image--after");
  btn_after.addEventListener("click", function (evt) {
  evt.preventDefault();
  scale_move.classList.remove("slider__scale--left");
  scale_move.classList.add("slider__scale--right");
  image_before.classList.remove("slider__image--active");
  image_after.classList.add("slider__image--active");
});
