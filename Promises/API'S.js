var userData = [];
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=> response.json())
.then(data=> {
    let json = JSON.stringify(data,null,2)
    console.log(json);
    userData = data,
    //console.log(userData),
    displayingData()
   })  
   .catch(error =>console.error('Error fetching data',error)); 
function displayingData(){
    const div_Container = document.getElementById('data-container');
    const table = document.createElement('table');
        table.setAttribute("class","table table-primary")
          div_Container.appendChild(table);

          const tableHeader = ['ID','Name','UserName','Email','Phone','Address'];
          const header_Row = document.createElement('tr');
          table.appendChild(header_Row)
          tableHeader.forEach(elemets =>{
              const th = document.createElement('th');
              th.textContent = elemets; 
              header_Row.appendChild(th);
          });    
          var tbody = document.createElement('tbody');
          userData.forEach(user=>{
            const tr = document.createElement('tr');
            const userField = [user.id, user.name, user.username, user.email, user.phone,user.address];

            userField.forEach(field =>{
                const td = document.createElement('td');
                      td.textContent = field;
                      tr.appendChild(td);
            });
            tbody.appendChild(tr);
            table.appendChild(tbody);
          })
}

