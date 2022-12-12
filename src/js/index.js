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
const nav = document.getElementById("nav");
const hamb = document.getElementById("hamburger");
window.addEventListener("scroll", function () {
  if (window.innerWidth > 992) {
    header.classList.toggle("sticky", window.scrollY > 200);
  }
});
if (window.innerWidth < 993) {
  header.classList.add("sticky");
}
window.addEventListener("resize", function () {
  header.classList.toggle("sticky", window.innerWidth < 993);
});

hamb.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* ASK QUE SECTION */
const faqs = document.querySelectorAll(".ask-que__faq");

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
