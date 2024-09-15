document.addEventListener('DOMContentLoaded', function () {
    // Create form container
    let form_div = document.createElement('div');
    form_div.setAttribute('class', 'container mt-5');
    document.body.appendChild(form_div);

    let form_Container = document.createElement('form');

    // Student Name
    let form_group = document.createElement("div");
    form_group.setAttribute('class', 'form-group');
    form_Container.appendChild(form_group);

    let label1 = document.createElement('label');
    label1.setAttribute('for', 'stdname');
    label1.innerHTML = 'Student Name';
    label1.setAttribute('class', "form-label");
    form_group.appendChild(label1);


    let input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('class', 'form-control');
    input1.setAttribute('name', "name");
    input1.setAttribute('id', 'stdname');
    form_group.appendChild(input1);

    // Student Age
    let form_group2 = document.createElement("div");
    form_group2.setAttribute('class', 'form-group');
    form_Container.appendChild(form_group2);

    let label2 = document.createElement('label');
    label2.setAttribute('for', 'stdage');
    label2.innerHTML = 'Student Age';
    label2.setAttribute('class', "form-label");
    form_group2.appendChild(label2);

    let input2 = document.createElement('input');
    input2.setAttribute('type', 'number');
    input2.setAttribute('name', "age");
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', 'age');
    form_group2.appendChild(input2);

    // Student Marks
    let form_group3 = document.createElement("div");
    form_group3.setAttribute('class', 'form-group');
    form_Container.appendChild(form_group3);

    let label3 = document.createElement('label');
    label3.setAttribute('for', 'marks');
    label3.innerHTML = 'Student Marks';
    label3.setAttribute('class', "form-label");
    form_group3.appendChild(label3);

    let input3 = document.createElement('input');
    input3.setAttribute('type', 'number');
    input3.setAttribute('name', "marks");
    input3.setAttribute('class', 'form-control');
    input3.setAttribute('id', 'marks');
    form_group3.appendChild(input3);

    // Submit Button
    let subButton = document.createElement('button');
    subButton.setAttribute('type', 'submit');
    subButton.setAttribute('id', 'std-btn');
    subButton.setAttribute('class', "btn btn-primary mt-1");
    subButton.innerHTML = `Submit`;

    form_Container.appendChild(subButton);
    form_div.appendChild(form_Container);
    let error_container = document.createElement('div');
    document.body.appendChild(error_container);
    error_container.setAttribute('id', "error-Container");
    document.body.setAttribute('class', 'container');

    // Form submission logic
    const studentForm = document.forms[0];

    let student_record = [];
    studentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Clear previous errors
        let error = document.getElementById('error-Container');
        error.innerHTML = '';
        // Validate form data
        let name = document.getElementById('stdname').value.trim();
        let age = parseInt(document.getElementById('age').value.trim());
        let marks = parseInt(document.getElementById('marks').value.trim());
        let valid = true;
        if (name.length < 4) {
            error.innerHTML += 'Name must be at least 4 characters long.<br>';
            valid = false;
        }
        if (isNaN(age) || age <= 16) {
            error.innerHTML += 'Age should be greater than 16.<br>';
            valid = false;
        }
        if (isNaN(marks) || marks < 0) {
            error.innerHTML += 'Marks should be a positive number.<br>';
            valid = false;
        }
        if (!valid) {
            return;  
        }

        // Create an object to store form data
        const student_data = {
            name: name,
            age: age,
            marks: marks
        };
        student_record.push(student_data);
        console.log(student_record);
        studentForm.reset();  // Reset form fields
        createTable(student_record);  // Refresh the table with new data
    });

    // Table creation logic
    function createTable(data) {
        let existingTable = document.querySelector('table');
        if (existingTable) {
            existingTable.remove();
        }

        if (data.length === 0) {
            return;  // If there is no data, do not create a table
        }

        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let thr = document.createElement('tr');

        // Add a serial number column header
        let thSerial = document.createElement('th');
        thSerial.innerText = '';
        thr.appendChild(thSerial);

        // Create other table headers
        for (let prop in data[0]) {
            let th = document.createElement('th');
           th.innerText = prop.charAt(0).toUpperCase() + prop.slice(1);
            thr.appendChild(th);
        }

        thead.appendChild(thr);
        table.appendChild(thead);
        table.setAttribute('class', 'table table-dark table-hover');

        // Populate table rows with data using a traditional for loop
        for (let i = 0; i < data.length; i++) {
            let tr = document.createElement('tr');

            // Add the serial number cell
            let tdSerial = document.createElement('td');
            tdSerial.innerText = i + 1;  // Serial number starts from 1
            tr.appendChild(tdSerial);

            // Add other data cells
            for (let prop in data[i]) {
                let td = document.createElement('td');
                td.innerHTML = data[i][prop];
                tr.appendChild(td);
            }
            tbody.append(tr);
        }
        table.appendChild(tbody);
        document.body.appendChild(table);
    }
});