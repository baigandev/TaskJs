const btn = document.querySelector(".btn")
const btn1 = document.querySelector(".btn1")
const modal = document.querySelector(".modalWindow")
modal.style.display = "none"
btn.addEventListener("click", () => {
  modal.style.display = "none"
})
btn1.addEventListener("click", () => {
    modal.style.display = "block"
})