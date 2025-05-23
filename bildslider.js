const slides = document.getElementById("slides");
const slideCount = slides.children.length;
let index = 0;

setInterval(() => {
  index = (index + 1) % slideCount;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
