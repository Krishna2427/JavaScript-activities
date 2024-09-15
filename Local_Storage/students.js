function getStudents() {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
  }
  
  // Save the student data to local storage
  function saveStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
  }
  
  // Render the student table
  function renderStudentTable() {
    const students = getStudents();
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = ''; // Clear existing table data
  
    students.forEach((student, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.name}</td>
         <td>${student.class}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
         <td><button onclick="removeStudent(${index})" class="btn btn-danger">Remove</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Add a new student
  document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('studentName').value;
    const stdclass = document.getElementById('studentClass').value;
    const age = document.getElementById('studentAge').value;
    const grade = document.getElementById('studentGrade').value;
  
    const students = getStudents();
    students.push({ name, stdclass, age, grade });
    saveStudents(students);
    renderStudentTable();
  
    // Clear form inputs
    document.getElementById('studentForm').reset();
  });
  
  // Remove a student
  function removeStudent(index) {
    const students = getStudents();
    students.splice(index, 1);
    saveStudents(students);
    renderStudentTable();
  }
  
  // Initial render of the table
  renderStudentTable();