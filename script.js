const menu = document.querySelector("#nav i");

const cross = document.querySelector("#full i");

const tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.5,
});

tl.from("#full h4", {
  x: 100,
  duration: 0.4,
  stagger: 0.3,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
  duration: 0.4,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
