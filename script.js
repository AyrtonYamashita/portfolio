const roles = [
  "Fullstack Developer...",
  "Automation Engineer...",
  "Backend Specialist...",
  "Support Computing..."
];

const typingElement = document.getElementById("typing");
const errorButtons = document.querySelectorAll(".error");


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

typeEffect();