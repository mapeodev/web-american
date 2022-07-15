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
    const slider = new Slider(customerStories);
    slider.initSlider();
  }
});
