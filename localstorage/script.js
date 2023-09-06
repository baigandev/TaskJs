
const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const h4 = document.querySelector("h4")
const ul = document.querySelector(".list")


function view() {
    ul.innerHTML = ""
    const task = JSON.parse(localStorage.getItem("task")) || []
    task.map((el) => {
        ul.innerHTML += `<li class="list-group-item d-flex align-items-center justify-content-between">
<span class="${el.isDone ? "line" : ""}">
<input type="checkbox" ${el.isDone ? "checked" : ""} class="check">
${el.title}
</span>
<button class="del-btn btn btn-primary">Delete</button>
<li/>`
    })
 input.value = ""
    deleteBtn()
    checkBoxes()
}


btn.addEventListener("click", () => {
    const task = JSON.parse(localStorage.getItem("task")) || []
    const newTask = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        title: input.value,
        isDone: false
    }
    const result = [...task, newTask]
    localStorage.setItem("task", JSON.stringify(result))
    view()
})
view()

function deleteBtn() {
    const task = JSON.parse(localStorage.getItem("task")) || []
    const buttons  = document.querySelectorAll(".del-btn")
    buttons.forEach((btn,index) => {
        btn.addEventListener("click", () => {
          const result = task.filter((el,idx) => {
                return idx !== index
            })
            localStorage.setItem("task",JSON.stringify(result))
            view()
        })
    })
}

function checkBoxes() {
    const task = JSON.parse(localStorage.getItem("task")) || []
    const checkBox = document.querySelectorAll(".check")
    checkBox.forEach((check, idx) => {
        check.addEventListener("click", () => {
          const result = task.map((el,index) => {
                if (index === idx){
                    return {...el, isDone: !el.isDone}
                }else {
                    return el
                }
            })
            localStorage.setItem("task", JSON.stringify(result))
          view()
        })
    })
}








