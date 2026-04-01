const navLinks = document.querySelectorAll(".nav-link");
const navContainer = document.querySelector("nav");
const sections = document.querySelectorAll("main[id], section[id]");

const centerNavLink = (id) => {
  const targetLink = document.querySelector(`.nav-link[href="${id}"]`);
  if (targetLink) {
    targetLink.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}


const observerOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      const targetHref = `#${id}`;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === targetHref;

        link.classList.toggle("opacity-100", isActive);
        link.classList.toggle("font-bold", isActive);
        link.classList.toggle("scale-110", isActive);
        link.classList.toggle("opacity-40", !isActive);

        if (isActive) {
          centerNavLink(targetHref);
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));