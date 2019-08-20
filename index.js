import { Carousel } from "./carousel.js";
const btn_prev = document.querySelector(".arrow-left");
const btn_next = document.querySelector(".arrow-right");
const carousel = new Carousel("#app-carousel");

btn_prev.addEventListener("click", () => {
  carousel.decrementPosition();
});

btn_next.addEventListener("click", () => {
  carousel.incrementPosition();
});
