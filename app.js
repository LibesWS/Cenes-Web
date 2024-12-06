// Nav

const menu = document.querySelector("#open-menu-btn");
const navReponsive = document.querySelector(".nav__responsive");
let active = false;

menu.addEventListener("click", function() {
  if (navReponsive.style.display === "none" || navReponsive.style.display === "") {
    navReponsive.style.display = "flex";
    navReponsive.classList.add("expand");
  } else {
    navReponsive.style.display = "none";
    navReponsive.classList.remove("expand");
  }
});

// Galeria

const opcion1 = document.querySelectorAll(".opcion1")
const opcion2 = document.querySelectorAll(".opcion2")
const opcion3 = document.querySelectorAll(".opcion3")
const opcion4 = document.querySelectorAll(".opcion4")


document.getElementById("filter").onchange = function () {
    // Selecciona el elemento anterior y quita la clase select-active si existe
    let all = document.querySelectorAll(".select-active");
    all.forEach(function (element) {
        element.classList.remove("select-active");
        element.setAttribute("name", " ")
    });

    if (this.value === "all") {
        opcion1.forEach(item => item.classList.add("select-active"));
        opcion2.forEach(item => item.classList.add("select-active"));
        opcion3.forEach(item => item.classList.add("select-active")); 
        opcion4.forEach(item => item.classList.add("select-active"));   
    } else if (this.value === "opcion1") {
        opcion1.forEach(item => item.classList.add("select-active"));
    } else if (this.value === "opcion2") {
        opcion2.forEach(item => item.classList.add("select-active"));
    } else if (this.value === "opcion3") {
        opcion3.forEach(item => item.classList.add("select-active"));
    } else if (this.value === "opcion4") {
      opcion4.forEach(item => item.classList.add("select-active"));
    }
};