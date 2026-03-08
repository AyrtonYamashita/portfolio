import { initTheme } from "./theme.js"
import { updateInterface, currentLang, translations } from './i18n.js';
import { startTyping, resetTyping } from './typing.js';

const langBtn = document.getElementById("switch-lang");

function init() {
  updateInterface();
  startTyping(translations[currentLang].role); 
}

langBtn.addEventListener("click", () => {
  
  resetTyping();
  startTyping(translations[currentLang].role);
});

init();

initTheme();
updateInterface();

const errorButtons = document.querySelectorAll(".error");

function errorAlert(msg) {
  alert(msg)
}

function rand() {
  return (Math.random() * 200 - 100).toFixed(0) + "px";
}

document.querySelectorAll(".blob").forEach(blb => {

  blb.style.setProperty("--x1", rand());
  blb.style.setProperty("--y1", rand());
  blb.style.setProperty("--x2", rand());
  blb.style.setProperty("--y2", rand());

});

errorButtons.forEach(button => {
  button.addEventListener("click", () => {
    errorAlert("Repositório privado");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
})

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el)
})
