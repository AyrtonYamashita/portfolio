const menu = document.querySelector(".menu-hamburguer");
const select_list = document.querySelector(".select-section");
const sections = document.querySelectorAll("section")

menu.onclick = () => {
  select_list.classList.toggle("active")
  menu.classList.toggle("close-path")

  sections.forEach((section) => {
    section.classList.toggle("blur")
  })
  console.log(menu)

}