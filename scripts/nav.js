const navLinks = document.querySelectorAll(".nav-link");
const navContainer = document.querySelector("nav");
const sections = document.querySelectorAll("main[id], section[id]");

let isNavScroll = false;
let navScrollTimeout;


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


navContainer.addEventListener("scroll", () => {
  isNavScroll = true;
  clearTimeout(navScrollTimeout);

  navScrollTimeout = setTimeout(() => {
    const navRect = navContainer.getBoundingClientRect();
    const centerX = navRect.left + navRect.width / 2;

    let closestLink = null;
    let minDistance = Infinity;

    navLinks.forEach(link => {
      const rect = link.getBoundingClientRect();
      const linkCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(centerX - linkCenterX);

      if (distance < minDistance) {
        minDistance = distance;
        closestLink = link;
      }
    });

    if (closestLink && isNavScroll) {
      const targetId = closestLink.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {

        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }


    setTimeout(() => { isNavScroll = false; }, 200);
  }, 150);
});


const observerOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  if (isNavScroll) return;

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


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    isNavScroll = false;
  });
});