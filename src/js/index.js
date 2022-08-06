import initContactForm from "./modules/contactForm";
import Slider from "./modules/Slider";

const customerStories = [
  {
    message:
      "Gracias a “ALA” no hubiera logrado mi sueño de trabajar en el extranjero.",
    author: "Carlos Carreño",
  },
  {
    message: "Mensaje de usuario numero 2",
    author: "Carlos Carreño",
  },
  {
    message: "tercer mensaje de usuario",
    author: "Carlos Carreño",
  },
];

document.addEventListener("readystatechange", () => {
  if (document.readyState == "complete") {
    initContactForm("contactForm");
    const slider = new Slider(customerStories);
    slider.initSlider();
  }
});

const customersPlayButton = document.getElementById("customers__play-button");
customersPlayButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  document.getElementById("customers-iframe").src += "?autoplay=1";
  document.getElementById("customers-iframe").classList.remove("hidden");
  document.getElementById("customers-cover").classList.add("hidden");
  document
    .getElementById("customers-player")
    .classList.add("customers__player--playing");
  customersPlayButton.classList.add("hidden");
});

const aboutPlayButton = document.getElementById("about-play-button");
aboutPlayButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  document.getElementById("about-iframe").src += "?autoplay=1";
  document.getElementById("about-iframe").classList.remove("hidden");
  document.getElementById("about-cover").classList.add("hidden");
  document.getElementById("about-video").classList.add("about__video--playing");
  aboutPlayButton.classList.add("hidden");
});

const flipCard = (cardId) => {
  const card = document.getElementById(cardId);
  if (card.classList.contains("teachers__card--flipped"))
    card.classList.remove("teachers__card--flipped");
  else card.classList.add("teachers__card--flipped");
};

const flipCard1 = document.getElementById("flip-card-1");
const resetCard1 = document.getElementById("reset-card-1");
flipCard1.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-1");
});

resetCard1.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-1");
});
