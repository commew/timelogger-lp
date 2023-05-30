"use strict";

//質問クリックでアンサー表示
const accordions = document.querySelectorAll("dt");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.parentNode.classList.toggle("appear");
  });
});

//アンダーバーアニメーション
const animatedBorders = document.querySelectorAll("[data-animate]");
const animatedImages = document.querySelectorAll(".animated-img");

window.addEventListener("scroll", () => {
  const windowBottom = window.pageYOffset + window.innerHeight;

  animatedBorders.forEach((el) => {
    const elBottom = el.offsetTop + el.offsetHeight;

    if (windowBottom > elBottom) {
      el.classList.add("animate");
    }
  });

  animatedImages.forEach((el) => {
    const elBottom = el.offsetTop + el.offsetHeight;

    if (windowBottom > elBottom) {
      el.classList.add("animate");
    }
  });
});

document
  .querySelector(".parallel-quadrangle-a")
  .addEventListener("animationend", () => {
    document.querySelector(".MV_image-main").style.opacity = "1";
  });
