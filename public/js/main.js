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

window.onload = function () {
  // アニメーション終了を検知するためのフラグを設定
  var animationEndFlag1 = false;
  var animationEndFlag2 = false;

  // mv-bg-img-1要素を取得します
  var bgImage1 = document.querySelector(".mv-bg-img-1");
  // mv-bg-img-2要素を取得します
  var bgImage2 = document.querySelector(".mv-bg-img-2");

  // mv-bg-img-1のアニメーション終了を検知するイベントリスナーを設定
  bgImage1.addEventListener("animationend", function () {
    animationEndFlag1 = true;
    showMainImage();
  });

  // mv-bg-img-2のアニメーション終了を検知するイベントリスナーを設定
  bgImage2.addEventListener("animationend", function () {
    animationEndFlag2 = true;
    showMainImage();
  });

  function showMainImage() {
    if (animationEndFlag1 && animationEndFlag2) {
      // 両方のアニメーションが終了したら、.MV_image-main要素を取得して表示
      var mainImage = document.querySelector(".MV_image-main");
      mainImage.style.display = "block";
    }
  }
};
