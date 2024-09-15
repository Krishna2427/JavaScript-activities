document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeList = document.getElementById('employeeList');
    const clearButton = document.getElementById('clearButton');

    // Load and display employee data from local storage when the page loads
    displayEmployeeData();

    // Handle form submission to save employee data
    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('employeeName').value;
        const age = document.getElementById('employeeAge').value;
        const department = document.getElementById('employeeDept').value;

        // Save employee data to local storage
        saveEmployeeData(name, age, department);

        // Display the updated list of employees
        displayEmployeeData();

        // Reset the form
        employeeForm.reset();
    });

    // Handle button click to clear all employee data
    clearButton.addEventListener('click', () => {
        clearEmployeeData();
    });

    // Function to save employee data to local storage
    function saveEmployeeData(name, age, department) {
        const employee = { name, age, department };

        // Get existing employees from local storage or initialize an empty array
        const employees = JSON.parse(localStorage.getItem('employees')) || [];

        // Add the new employee to the array
        employees.push(employee);

        // Save the updated employee array to local storage
        localStorage.setItem('employees', JSON.stringify(employees));
    }

    // Function to display employee data from local storage
    function displayEmployeeData() {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        employeeList.innerHTML = ''; // Clear current list

        if (employees.length === 0) {
            employeeList.textContent = 'No employee data stored yet.';
            return;
        }

        // Create a list item for each employee
        employees.forEach(employee => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}`;
            employeeList.appendChild(listItem);
        });
    }

    // Function to clear all employee data from local storage
    function clearEmployeeData() {
        localStorage.removeItem('employees'); // Remove employees data from local storage
        displayEmployeeData(); // Update display
    }
});