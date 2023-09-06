const burgerMenu = document.querySelector(".burger-menu")
const headerNav= document.querySelector(".header-nav")
const headerItem = document.querySelectorAll(".burger-item")
burgerMenu.addEventListener("click", () => {
    if (!burgerMenu.classList.contains("active")){
        burgerMenu.classList.add("active")
        headerNav.style.transform = "translateX(0)"
    }else {
        burgerMenu.classList.remove("active")
        headerNav.style.transform = "translateX(100%)"

    }
})