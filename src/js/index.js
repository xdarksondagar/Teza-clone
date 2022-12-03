// import Swiper bundle with all modules installed
/* SMOOTH SCROLL
import smoothScroll from "./scroll";

const scroll__container = document.querySelector(".scroll__container");
const scrolling = new smoothScroll(scroll__container);
*/

import gsap from "gsap";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiperHero = new Swiper(".hero__slider", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

const swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiperExpertTeam = new Swiper(".expert-team__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const btnContainers = document.querySelectorAll(".btn-container");

btnContainers.forEach((btnContainer) => {
  const hoverEl = document.createElement("div");
  hoverEl.classList.add("hover");

  btnContainer.appendChild(hoverEl);

  const btn = btnContainer.querySelector(".btn");

  btn.addEventListener("mouseenter", () => {
    const hoverElement = btnContainer.querySelector(".hover");
    gsap.to(hoverElement, { top: "-160%" });
  });
  btn.addEventListener("mouseleave", () => {
    const hoverElement = btnContainer.querySelector(".hover");
    gsap.to(hoverElement, { top: "-400%" });

    setTimeout(() => hoverElement.remove(), 600);

    setTimeout(() => {
      const hoverEl = document.createElement("div");
      hoverEl.classList.add("hover");

      btnContainer.appendChild(hoverEl);
    }, 500);
  });
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

// NAVBAR
const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 200);
});
