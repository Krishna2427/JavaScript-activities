var userData = [];
var postData = [];
var container = document.createElement('div');
    container.setAttribute('class','container');
    document.body.appendChild(container);

var btn1 = document.createElement('button');
    btn1.setAttribute("class",'data');
    btn1.textContent ='UserData'
    container.appendChild(btn1);

// var btn2 = document.createElement('button');
//      btn2.setAttribute("class",'data');
//     btn2.textContent ='PostData';
//     container.appendChild(btn2);
document.body.appendChild(btn1);
//document.body.appendChild(btn2);

var userBtn = document.getElementsByName('data')
    
 userBtn.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
.then(response=> response.json())
.then(data=> {
    let json = JSON.stringify(data,null,2)
    console.log(json);
    userData = data,
    //console.log(userData),
    creatingDynamicTableHeader();
   }) .catch(error => console.log('Cought Error: fetch data not founded',error))
 })

let creatingDynamicTableHeader = () => {
    btn1.style.display = 'none';
    
    const tableHeaders = ['ID','Name','UserName','Email','Phone','Address'];
    const table = document.getElementById('dynamic-table');
    table.setAttribute("class","table table-bordered")
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    
    tableHeaders.forEach(head => {
        const th = document.createElement('th');
        th.textContent = head;
        th.style.padding = '20px'
        th.style.backgroundColor="#333";
        th.style.color ="white"
        tr.appendChild(th);
    });
    
    var tbody = document.createElement('tbody');
    userData.forEach(user=>{
        const ttr = document.createElement('tr')
        const userField = [user.id, user.name, user.username, user.email, user.phone,user.address];
        userField.forEach(field=>{
            const td = document.createElement('td');
                  td.textContent=field;
                  ttr.appendChild(td);
        })
        tbody.appendChild(ttr);
    })
    table.appendChild(tbody);
    thead.appendChild(tr);
    table.appendChild(thead);
}
