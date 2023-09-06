const boxes = document.querySelector(".boxes")
boxes.style.display = "none"

const btn1 = document.querySelector(".btn1")
const box1 = document.querySelector(".box1")

btn1.addEventListener("click", () => {
    box1.style.display = "block"
})