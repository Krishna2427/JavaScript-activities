var userData = [];
var postData = [];
const div_btn = document.createElement('div');
div_btn.setAttribute('class', 'text-center pt-5');

const btn1 = document.createElement('button');
btn1.textContent = 'UserData';
btn1.setAttribute("class", "btn btn-primary");
div_btn.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.textContent = 'PostData';
btn2.setAttribute("class", "btn btn-warning");
div_btn.appendChild(btn2);

document.body.appendChild(div_btn);

let handleUserData = (event) => {
    const clickedButton = event.target.textContent;
    if (clickedButton == 'UserData') {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                userData = data; // Correct assignment of data
                console.log(userData);
                creatingTable('user'); // Call with the correct type
            });
    } else if (clickedButton == 'PostData') {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                postData = data; // Correct assignment of data
                console.log(postData);
                creatingTable('post'); // Call with the correct type
            });
    }
}

function creatingTable(type) {
    const existingTable = document.getElementById('dynamic-Table');
    if (existingTable) {
        existingTable.remove();
    }

    const table = document.createElement('table');
    table.setAttribute('id', 'dynamic-Table');
    table.setAttribute('class', 'table table-bordered');

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    let tableHeaders = [];

    if (type == 'user') {
        tableHeaders = ['ID', 'Name', 'UserName', 'Email', 'Phone', 'Address'];
    } else if (type == 'post') {
        tableHeaders = ['ID', 'Title', 'Body'];
    }

    tableHeaders.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.style.padding = '20px';
        th.style.backgroundColor = '#333';
        th.style.color = 'white';
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    if (type == 'user') {
        userData.forEach(user => {
            const ttr = document.createElement('tr');
            const userFields = [user.id, user.name, user.username, user.email, user.phone, `${user.address.street}, ${user.address.city}`];
            userFields.forEach(field => {
                const td = document.createElement('td');
                td.textContent = field;
                ttr.appendChild(td);
            });
            tbody.appendChild(ttr);
        });
    } else if (type == 'post') {
        postData.forEach(post => {
            const ttr = document.createElement('tr');
            const postFields = [post.id, post.title, post.body];
            postFields.forEach(field => {
                const td = document.createElement('td');
                td.textContent = field;
                ttr.appendChild(td);
            });
            tbody.appendChild(ttr);
        });
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
    
}

btn1.addEventListener('click', handleUserData);
btn2.addEventListener('click', handleUserData);