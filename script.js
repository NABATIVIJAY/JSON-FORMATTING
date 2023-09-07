const res = fetch("https://jsonplaceholder.typicode.com/users")
res.then((data)=>data.json()).then((data1)=>{
    for (var i=0; i<data1.length;i++){
        console.log(data1[i])
        const div = document.createElement("div")
        div.innerHTML= `<div class="row row-cols-3 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
              <p class="card-text"><b><i>name: ${data1[i].name}</b></i></p>
              <p class="card-text"><b><i>address.street: ${data1[i].address.street}</b></i></p>
              <p class="card-text"><b><i>address.city: ${data1[i].address.city}</b></i></p>
              <p class="card-text"><b><i>email: ${data1[i].email}</b></i></p>
            </div>
          </div>
        </div>
        </div>`
        document.body.append(div);
    }
})