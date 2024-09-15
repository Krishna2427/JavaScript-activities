document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.forms[0];
    const Databtn = document.getElementById('studentData');
    const searchData = document.getElementById('searchData');
    const saveButton = document.getElementById('saveButton');
    const sortdata = document.getElementById('sortdata');
    const tableContent = document.getElementById('table-content');
    const submitBtn = document.getElementById('submitBtn');
   // const entereData = document.getElementById('entereData');

    let editingID = null;
    // Event listener for form submission
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentData = {
            id: editingID || Date.now(),
            name: document.getElementById('stdName').value,
            education: document.getElementById('education').value,
            branch: document.getElementById('branch').value,
            stdPassOut: document.getElementById('stdPassOut').value,
            cgpa: document.getElementById('cgpa').value,
            course: document.getElementById('course').value,
            state: document.getElementById('state').value,
            reference: document.getElementById('reference').value
        };
        // Retrieve current students from localStorage or initialize as an empty array
        const students = JSON.parse(localStorage.getItem('students')) || [];
        if (editingID) {
            const index = students.findIndex(student => student.id === editingID); // Fixed condition
            if (index !== -1) {
                students[index] = studentData;
            }
        } else {
            students.push(studentData);
        }
        // Save the updated student data back to localStorage
        localStorage.setItem('students', JSON.stringify(students));
        studentForm.reset();
        editingID = null;
        // studentForm.style.display ='none'
        studentForm.style.display = 'none';
        saveButton.style.display = 'none'; // Hide Save button after saving
        submitBtn.style.display = 'inline-block'; // Show Add button
        displayingData();
    });
    // Add event listener for the data button
    Databtn.addEventListener('click', () => {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        if (students.length > 0) {
            tableContent.style.display = 'table';
            searchData.style.display = 'inline-block';
            sortdata.style.display = 'inline-block';
            displayingData();
        } else {
            alert('No student data available to display');
        };
        studentForm.style.display ='none'
    });
    function displayingData() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const tbody = document.getElementById('table-data'); // Correct ID
        tbody.innerHTML = ''; // Clear existing content
        students.forEach(student => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${student.name}</td>
                <td>${student.education}</td>
                <td>${student.branch}</td>
                <td>${student.stdPassOut}</td>
                <td>${student.cgpa}</td>
                <td>${student.course}</td>
                <td>${student.state}</td>
                <td>${student.reference}</td>
                <td>
                    <button class="btn btn-warning btn-sm me-2"onclick="editStudent(${student.id})">Edit</button>
                    <button class="btn btn-danger btn-sm"onclick="removeStudent(${student.id})">Remove</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
    window.removeStudent = (id)=>{
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students = students.filter(student => student.id !== id);
        localStorage.setItem('students', JSON.stringify(students));
        displayingData();
    }
    window.editStudent = (id)=>{
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const student = students.find(student => student.id === id);
        if (student) {
            // Populate the form fields with the student's current data
            document.getElementById('stdName').value = student.name;
            document.getElementById('education').value = student.education;
            document.getElementById('branch').value = student.branch;
            document.getElementById('stdPassOut').value = student.stdPassOut;
            document.getElementById('cgpa').value = student.cgpa;
            document.getElementById('course').value = student.course;
            document.getElementById('state').value = student.state;
            document.getElementById('reference').value = student.reference;
            editingID = id;
            studentForm.style.display = 'block'
            saveButton.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }
    searchData.addEventListener('click', () => {
        // Code to search student data
        sortStudentData();
    });
    sortdata.addEventListener('click', () => {
        // Code to sort student data
//studentSearchData();
    });
    function sortStudentData() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.sort((a, b) => a.name.localeCompare(b.name)); // Corrected typo here
        localStorage.setItem('students', JSON.stringify(students));
        displayingData();
    }
    // function studentSearchData(){
    //     const students = JSON.parse(localStorage.getItem('students')) || [];
    //     const fliteredStudents = students.filter(student =>{
    //         return {

    //         }
    //      })
    // }
});