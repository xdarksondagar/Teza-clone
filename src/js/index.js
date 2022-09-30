// import Swiper bundle with all modules installed
/* SMOOTH SCROLL
import smoothScroll from "./scroll";

const scroll__container = document.querySelector(".scroll__container");
const scrolling = new smoothScroll(scroll__container);
*/
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".hero__slider", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

import gsap from "gsap";

const btnContainers = document.querySelectorAll(".btn-container");

btnContainers.forEach((btnContainer) => {
  const hover = btnContainer.querySelector(".hover");
  const btn = btnContainer.querySelector(".btn");

  btn.addEventListener("mouseenter", () => {
    gsap.to(hover, { top: "-160%" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(hover, { top: "-400%" });
  });
  btn.addEventListener("mouseleave", () => gsap.set(hover, { top: "100%" }));
});

// counter update
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0+";

  const updateCounter = () => {
    const c = +counter.innerText;
    const target = +counter.getAttribute("data-target");

    const increment = target / 500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}+`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target + "+";
    }
  };
  updateCounter();
});
