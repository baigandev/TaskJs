const row = document.querySelector(".row")
row.style.marginTop = "100px"
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.map((el) => {
            row.innerHTML += `<div class="col-5  p-2">
<div class="d-flex w-50% block align-items-center justify-content-center">
<img src="./img/149071.png" alt="img" width="20%">
<div class="p-2 info">
<h6 class="name">${el.name}</h6>
<h5 class="userName">${el.username}</h5>
</div>
</div>
<ul>
<li>City: ${el.address.city}</li>
<li>Street: ${el.address.street}</li>
<li>Email: ${el.email}</li>
<li>Phone: ${el.phone}</li>
</ul>



<div/>`
        })
    })