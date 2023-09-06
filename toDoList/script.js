const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const h4 = document.querySelector("h4")
const ul = document.querySelector("ul")

btn.addEventListener("click", () => {
  if (input.value === ""){
      h4.innerHTML = "404"
  }else{
      h4.innerHTML = ""
      ul.innerHTML += `<li class="list-group-item d-flex align-items-center justify-content-between">
<span>
<input type="checkbox" class="check">
${input.value}
</span>
<button class="del-btn btn btn-primary">Удалить</button>
<li/>`
      input.value = ""
  }
})

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains("check")){
        if (e.target.parentNode.classList.contains("line")){
            e.target.parentNode.classList.remove("line")
        }else{
            e.target.parentNode.classList.add("line")
        }
    }
})