const roles = [
  "Fullstack Developer...",
  "Automation Engineer...",
  "Backend Specialist...",
  "Support Computing..."
];

const typingElement = document.getElementById("typing");
const errorButtons = document.querySelectorAll(".error");
const toggle = document.getElementById("switch-mode");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentRole.slice(0, charIndex);

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, speed);
}

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

if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
})

typeEffect();