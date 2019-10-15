const url="https://jsonplaceholder.typicode.com/photos"
fetch(url)
.then(response => response.json())
.then(data => {
    const card = document.querySelector('#card');
       data.forEach(element => {
           if(element.id <= 52)
           card.innerHTML +=`
          
           <div class="card-header">${element.title}</div>
          <img src="${element.url}" class="img-fluid">
           `;
    });
})
.catch( () => console.error("I am"))
.finally( () => console.warn("alway"))
