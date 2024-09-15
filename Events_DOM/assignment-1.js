document.addEventListener('DOMContentLoaded', () => {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('errorContainer').innerHTML = '';

        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var dob = document.getElementById("dob").value;
        var age = document.getElementById("age").value;
        var website = document.getElementById("website").value;
        var phone = document.getElementById("phone").value;
        var terms = document.getElementById("terms").checked;

        var errors = [];

        if (username.trim() === '') {
            errors.push("Username is required");
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("Invalid email address");
        }

        if (password.length < 6) {
            errors.push("Password must be at least 6 characters long");
        }

        if (age === '' || age < 18) {
            errors.push("Age must be 18 years or older");
        }

        var urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/[\w\d- .%&=]*)?$/i;
        if (website && !urlPattern.test(website)) {
            errors.push("Invalid website URL");
        }

        var phonePattern = /^0\d{10}$/
        if (!phonePattern.test(phone)) {
            errors.push("Phone number must be 10 digits");
        }

        if (dob === '') {
            errors.push("Date of birth is required");
        }

        if (!terms) {
            errors.push("You must accept the terms and conditions");
        }

        if (errors.length > 0) {
            var errorContainer = document.getElementById('errorContainer');
            errors.forEach(error => {
                var errorDiv = document.createElement('div');
                errorDiv.style.color = 'red';
                errorDiv.innerHTML = error;
                errorContainer.appendChild(errorDiv);
            });
        } else {
            form.style.display='none';
            UserTable();
            alert('Form submitted successfully');
        }
    });
    function findinAge(){
       var today = new Date();
       var birthday = new Date(dob);
       var dateOfBirth = today - birthday;
       
    }
    function UserTable() {
        var tableContent = document.getElementById('table-content');
        tableContent.innerHTML = ''; 
        var table = document.createElement('table');
            table.setAttribute('class','table table-bordered border-primary')
        var thead = document.createElement('thead');
        thead.innerHTML = `<tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Date Of Birth</th>
            <th>Age</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Terms</th>
        </tr>`;
        table.appendChild(thead);

        var tbody = document.createElement('tbody');

        var tr = document.createElement('tr');
        tr.innerHTML = `<td>${document.getElementById("username").value}</td>
                        <td>${document.getElementById("email").value}</td>
                        <td>${document.getElementById("password").value}</td>
                        <td>${document.getElementById("dob").value}</td>
                        <td>${document.getElementById("age").value}</td>
                        <td>${document.getElementById("website").value}</td>
                        <td>${document.getElementById("phone").value}</td>
                        <td>${document.getElementById("terms").checked ? 'Accepted' : 'Not Accepted'}</td>`;
 /*
        for(var i = 0; i <form.length; i++){
                tr.innerHTML = `<td>${myForm[i].username}</td>
                                <td>${myForm[i].email}</td>
                                <td>${myForm[i].password}</td>
                                <td>${myForm[i].dob}</td>
                                <td>${myForm[i].age}</td>
                                <td>${myForm[i].website}</td>
                                <td>${myForm[i].phone}</td>
                                <td>${myForm[i].terms}</td>`;
            tbody.appendChild(tr);
        }
     */
        tbody.appendChild(tr);
        table.appendChild(tbody);

        tableContent.appendChild(table);
    }
});