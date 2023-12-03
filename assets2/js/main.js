document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({}),
      particlesJS("particles-js", {
        particles: {
          number: { value: 50, density: { enable: !0, value_area: 700 } },
          color: { value: "#ffffff" },
          shape: {
            type: "polygon",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
          },
          size: {
            value: 3,
            random: !0,
            anim: {
              enable: !1,
              speed: 19.18081918081918,
              size_min: 0.1,
              sync: !1,
            },
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 4,
            direction: "none",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          },
          nb: 80,
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !1, mode: "grab" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      });
  },
  !1
);

// On scroll body remove .hidden from #scroll-downs-icon-mouse and add hidden to #scroll-downs-icon

const scrollDownIconMouse = document.querySelector("#scroll-downs-icon-mouse"); // Mouse icon to show on scroll
const scrollDownIcon = document.querySelector("#scroll-downs-icon"); // Arrow icon to hide on scroll and show when still
const scrollDiv = document.querySelector("#scrollPage");

var scrollTimer = -1;

function bodyScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    scrollDiv.classList.add("hidden");
    return;
  } else {
    scrollDiv.classList.remove("hidden");
  }

  scrollDownIconMouse.classList.remove("hidden");
  scrollDownIcon.classList.add("hidden");
  scrollDiv.firstElementChild.classList.remove("custom-bounce");

  if (scrollTimer != -1) clearTimeout(scrollTimer);

  scrollTimer = window.setTimeout("scrollFinished()", 500);
}

function scrollFinished() {
  scrollDownIconMouse.classList.add("hidden");
  scrollDownIcon.classList.remove("hidden");
  // Select the first child of scrollDiv
  scrollDiv.firstElementChild.classList.add("custom-bounce");
}

window.addEventListener("scroll", bodyScroll);
