document.addEventListener('DOMContentLoaded', () => {
  //studentValidation();
  function StudentTable(students) {
    let existingTable = document.querySelector('table');
    let table_Container = document.getElementById('table-content');
    if (existingTable) {
      existingTable.remove();
    }

    let table = document.createElement('table');
    table.setAttribute('class', 'table table-bordered');
    table_Container.appendChild(table);
    let thead = document.createElement('thead');
    thead.innerHTML = `<tr>
                           <th>SNO</th>
                           <th>Student Name</th>
                           <th>Date Of Birth</th>
                           <th>Age</th>
                           <th>Total Marks</th>
                           <th>Pass/Fail</th>
                       </tr>`;
    table.appendChild(thead);
    let tbody = document.createElement('tbody');
    var i = 1;
    console.log(typeof i);
    for (let student of students) {
      let row = document.createElement('tr');
      row.innerHTML = `  <td>${i++}
                         <td>${student.fullName}</td>
                         <td>${student.dob}</td>
                         <td>${student.age}</td>
                         <td>${student.totalMarks}</td>
                         <td>${student.result}</td>`;
      tbody.appendChild(row);
    }
    table.appendChild(tbody);
  }
  function studentValidation() {
  var stdName = document.getElementById('firstname');
  var errorMessage = document.getElementById('error-message');
  
  stdName.addEventListener('click', (e) => {
    var hasUser = /\d/; // Regular expression to check for numbers in the name
    var nameValue = stdName.value; // Accessing the value of the input field
  
    if (hasUser.test(nameValue) || nameValue.length < 4) {
      errorMessage.innerHTML = "Name should be 4 characters or more and should not contain numbers.";
      errorMessage.style.color = "red";
    } else {
      errorMessage.innerHTML = "";
    }

  });
  }
  var myForm = document.forms[0];
  var studentsArray = []; // Initialize an array to store students;

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var dob = document.getElementById('dob').value;
    var temp_marks = document.getElementsByName('marks');

    var marks = [];
    for (let mark of temp_marks) {
      marks.push(Number(mark.value));
    }
    var student = new Student(firstName, lastName, dob, marks);
    studentsArray.push(student); // Add student to the array

    // Reset form after processing the student data
    myForm.reset();
    StudentTable(studentsArray); // Pass the array of students
  });

  class Student {
    constructor(firstName, lastName, dob, marks) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = dob;
      this.marks = marks;
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    get totalMarks() {
      let total = 0;
      for (let mark of this.marks) {
        total += mark;
      }
      return total;
    }
    get age() {
      var today = new Date();
      var birthDate = new Date(this.dob);
      var ageInMilliseconds = today - birthDate;

      var ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      var ageInMonths = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
      var ageInDays = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
      return `${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`;
    };
    get result() {
      let passMark = 35;
      let isPass = this.marks.every(mark => mark >= passMark);
      return isPass ? 'Pass' : 'Fail';
    }
  }
});