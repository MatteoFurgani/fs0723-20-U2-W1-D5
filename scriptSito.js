//sono riuscito a far cambiare colore alla nav bar, ma non sono riuscito a rallentare il cambio colore..//

window.addEventListener("scroll", () => {
  let nav = document.getElementById("nav");
  if (window.scrollY > 450) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
