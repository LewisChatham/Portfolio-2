const burger = document.getElementById("header-burger")
const menu = document.getElementById("header-menu")

function toggleBurger () {
    if (burger.classList.contains("active")) {
        burger.classList.remove("active")
        menu.classList.remove("visible")
    } else {
        burger.classList.add("active")
        menu.classList.add("visible")
    }
}

burger.addEventListener("click", toggleBurger)