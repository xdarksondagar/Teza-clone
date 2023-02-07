import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import "textify.js/dist/Textify.min.css";
import TextAni from "textify.js";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/* SMOOTH SCROLLING */

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute("href"));
  });
});

const logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
  lenis.scrollTo(".hero", 0);
});

/* SLIDERS */
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
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
const swiperReview = new Swiper(".review__slider", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});
const swiperAboutExpertTeam = new Swiper(".about-expert-team__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

/* HOVER LOGIC */
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

const updateCounter = (counter) => {
  const c = +counter.innerText.slice(0, counter.innerText.length - 1);
  const target = +counter.getAttribute("data-target");

  const increment = target / 500;
  if (c < target) {
    counter.innerText = `${Math.ceil(c + increment)}+`;
    setTimeout(() => updateCounter(counter), 10);
  } else {
    console.log("target");
    counter.innerText = target + "+";
  }
};

counters.forEach((counter) => {
  counter.innerText = "0+";
  updateCounter(counter);
});

// NAVBAR
const header = document.getElementById("header");

if (header) {
  lenis.on("scroll", ({ scroll }) => {
    if (window.innerWidth > 992) {
      header.classList.toggle("sticky", scroll > 200);
    }
  });
  if (window.innerWidth < 993) {
    header.classList.add("sticky");
  }
  window.addEventListener("resize", function () {
    if (lenis.scroll < 200) {
      header.classList.toggle("sticky", window.innerWidth < 993);
    }
  });
}

const nav = document.getElementById("nav");
const hamb = document.getElementById("hamburger");

hamb.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* ASK QUE SECTION */
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActive();
    if (!faq.classList.contains("active")) {
      faq.classList.add("active");
    }
  });
});

function removeActive() {
  faqs.forEach((faq) => faq.classList.remove("active"));
}

// TEXT ANIMATIONS
const text1 = document.querySelector("[data-textify-text = one]");
const text2 = document.querySelector("[data-textify-text = two]");
const text3 = document.querySelector("[data-textify-text = three]");
const text4 = document.querySelector("[data-textify-text = four]");

if (text1) {
  const animation = new TextAni.Textify({
    selector: "[data-textify-text = one]",
    fade: true,
    top: true,
    rotation: 20,
    scale: 2,
    easing: "backOut",
    fadeEasing: "easeIn"
  });
}

if (text2) {
  const animationTwo = new TextAni.Textify({
    selector: "[data-textify-text = two]",
    duration: 1000,
    stagger: 15,
    fade: false,
    easing: "elasticInOut",
    threshold: 0.5,
    transformOrigin: "center center"
  });
}

if (text3) {
  const animationThree = new TextAni.Textify({
    selector: "[data-textify-text = three]",
    duration: 2000,
    stagger: 50,
    fade: false,
    easing: "elasticInOut",
    threshold: 0.5,
    transformOrigin: "center center"
  });
}

if (text4) {
  const animationFour = new TextAni.Textify({
    selector: "[data-textify-text = four]",
    duration: 1000,
    stagger: 200,
    fade: true,
    rotation: "15",
    scale: 0,
    easing: "easeIn",
    fadeEasing: "sharp"
  });
}

/* TITLE ANIMATION */

const title1 = document.querySelector("[data-textify-title = one]");
const title2 = document.querySelector("[data-textify-title = two]");
const title3 = document.querySelector("[data-textify-title = three]");
const title4 = document.querySelector("[data-textify-title = four]");

if (title1) {
  const animationTitle = new TextAni.TextifyTitle({
    selector: "[data-textify-title = one]",
    stagger: 20,
    rotation: 0,
    scale: 1.5,
    easing: "bounceIn"
  });
}

if (title2) {
  const animationTitleTwo = new TextAni.TextifyTitle({
    selector: "[data-textify-title = two]",
    duration: 1000,
    stagger: 15,
    fade: false,
    easing: "elasticInOut",
    threshold: 0.5,
    transformOrigin: "center center"
  });
}

if (title3) {
  const animationTitleThree = new TextAni.TextifyTitle({
    selector: "[data-textify-title = three]",
    duration: 700,
    stagger: 10,
    fade: true,
    top: false,
    reveal: false,
    rotation: "-20",
    scale: 0.5,
    easing: "backOut",
    fadeEasing: "bounceOut",
    fadeDuration: 200,
    threshold: 0.5,
    transformOrigin: "center center"
  });
}

if (title4) {
  const animationTitleFour = new TextAni.TextifyTitle({
    selector: "[data-textify-title = four]",
    duration: 1000,
    stagger: 10,
    fade: true,
    top: false,
    reveal: false,
    scale: 0,
    easing: "bounceOut",
    fadeDuration: 500,
    threshold: 0.7,
    fadeEasing: "sharp"
  });
}
