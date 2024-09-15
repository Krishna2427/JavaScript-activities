document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.forms[0];
    const studentData = document.getElementById('table-data');
    const showDataButton = document.getElementById('showDataButton');
    const sortDataButton = document.getElementById('sortDataButton');
    const searchInput = document.getElementById('searchDataButton');
  
    // Display the initial list of students
    displayStudents();
  
    // Event listener for the form submission
    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const stdName = document.getElementById('studentName').value;
      const stdClass = document.getElementById('studentClass').value;
      const stdAge = document.getElementById('studentAge').value;
      const stdGrade = document.getElementById('studentGrade').value;
      const stdBatch = document.getElementById('studentBatch').value;
  
      saveStudentData(stdName, stdClass, stdAge, stdGrade, stdBatch);
      studentForm.reset();
    });
  
    // Show data button to display student data and sort/search options
    showDataButton.addEventListener('click', () => {
      studentData.style.display = 'table'; // Show the student data table
      sortDataButton.style.display = 'inline-block'; // Show the sort button
      searchInput.style.display = 'inline-block'; // Show the search input
      displayStudents();
    });
  
    // Sort data button to sort students by name
    sortDataButton.addEventListener('click', () => {
      sortStudentData();
    });
  
    // Search input event listener for searching student data
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      searchStudentData(query);
    });
  
    function saveStudentData(name, stdclass, age, grade, batch) {
      const students = JSON.parse(localStorage.getItem('students')) || [];
      const newStudent = { id: Date.now(), name, stdclass, age, grade, batch };
      students.push(newStudent);
  
      // Save updated students array back to local storage
      localStorage.setItem('students', JSON.stringify(students));
      displayStudents(); // Update the student list after adding
    }
  
    function displayStudents(students = null) {
      const studentBody = document.getElementById('table-body');
      studentBody.innerHTML = ''; // Clear existing content
  
      const studentList = students || JSON.parse(localStorage.getItem('students')) || [];
  
      studentList.forEach(student => {
        const tr = document.createElement('tr');
  
        // Set the HTML for the table row
        tr.innerHTML = `<td>${student.name}</td>
                        <td>${student.stdclass}</td>
                        <td>${student.age}</td>
                        <td>${student.grade}</td>
                        <td>${student.batch}</td>`;
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.onclick = () => deleteStudent(student.id);
        const td = document.createElement('td');
        td.appendChild(deleteBtn);
        tr.appendChild(td);
  
        studentBody.appendChild(tr);
      });
    }
  
    function deleteStudent(id) {
      let students = JSON.parse(localStorage.getItem('students')) || [];
  
      // Filter out the student to delete
      students = students.filter(student => student.id !== id);
  
      // Save the updated array back to local storage
      localStorage.setItem('students', JSON.stringify(students));
  
      // Update the displayed student list
      displayStudents();
    }
  
    function sortStudentData() {
      let students = JSON.parse(localStorage.getItem('students')) || [];
  
      // Sort students by name
      students.sort((a, b) => a.name.localeCompare(b.name));
  
      // Save sorted students array back to local storage
      localStorage.setItem('students', JSON.stringify(students));
  
      // Update the displayed student list
      displayStudents();
    }
  
    function searchStudentData(query) {
      const students = JSON.parse(localStorage.getItem('students')) || [];
  
      // Filter students based on the search query
      const filteredStudents = students.filter(student => {
        return (
          student.name.toLowerCase().includes(query) ||
          student.stdclass.toLowerCase().includes(query) ||
          student.age.toString().includes(query) ||
          student.grade.toLowerCase().includes(query) ||
          student.batch.toLowerCase().includes(query)
        );
      });
  
      // Display the filtered students
      displayStudents(filteredStudents);
    }
  });