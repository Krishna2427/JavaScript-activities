fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{
    let json = JSON.stringify(data,null,2);
    console.log(json);
})
.catch(error =>console.error("Error fetching data", error))