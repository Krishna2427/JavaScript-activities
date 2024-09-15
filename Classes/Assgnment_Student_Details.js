document.addEventListener('DOMContentLoaded', () => {
    const student_form = document.forms[0];
    const error_message = document.getElementById('error-container');
    
    student_form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collecting form input values
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const dob = document.getElementById('dob').value;
        const age = document.getElementById('age').value;
        const maths = document.getElementById('maths').value;
        const physics = document.getElementById('physics').value;
        const english = document.getElementById('english').value;
        StudentAge()
        let student = new Student();
        console.log(student.getFullName);
        StudentTable(student);
    });
    function StudentAge(){
        var existingAge = document.getElementById('dob').value;
        var dob  = new Date(existingAge);
        var today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate)){
            age --;
        }
        document.getElementById('age').value = age;

    }

    class Student {
        constructor(firstName, lastName,dob, age, ...marks) {
            this.firstName = firstName;
            this.lastName =lastName;
            this.dob = dob;
            this.age = age;
            this.marks = marks;
        }
        get getFirstName() {
            return this.firstName;
        }
        set setFirstName(firstName) {
            this.firstName = firstName;
        }
        get getLastName() {
            return this.lastName;
        }
        set setLastName(lastName) {
            this.lastName = lastName;
        } 
        get getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        set setDOB(dob) {
            this.dob = dob;
        }
        get getDOB() {
            return this.dob;
        }
        set setAge(age) {
            this.age = age;
        }
        get getAge() {
            return this.age;
        }     
       set setMathMarks(maths){
           return this.maths;
       }
        get getMathMarks() {
            return this.maths;
        }
        set setPysicMarks(physics){
            return this.physics;
        }
         get getPysicsMarks() {
             return this.physics;
         }
         set setEnglishMarks(physics){
            return this.physics;
        }
         get getEnglishMarks() {
             return this.physics;
         }
         getTotalMarks(){
            let Total = 0;

         }
    }

    function StudentTable(student) {
        console.log(student);
        let existingTable = document.querySelector('table');
        let table_Container = document.getElementById('table-content');
        if (existingTable) {
            existingTable.remove();
        }

        let table = document.createElement('table');
        table.setAttribute('class', 'table table-border');
        table_Container.appendChild(table);

        let thead = document.createElement('thead');
        thead.innerHTML = `<tr><th>Student Name</th>
                               <th>Date Of Birth</th>
                               <th>Age</th>
                               <th>Maths</th>
                               <th>Physics</th>
                               <th>English</th>
                               <th>Total Marks</th>
                               <th>Pass/Fail</th>
                           </tr>`;
        table.appendChild(thead);

        let tbody = document.createElement('tbody');
        let row = document.createElement('tr');

        row.innerHTML = `<td>${student.getFullName}</td>
                         <td>${student.getDOB}</td>
                         <td>${student.getAge}</td>
                         <td>${student.maths}</td>
                         <td>${student.physics}</td>
                         <td>${student.english}</td>
                         <td>${student.getTotalMarks()}</td>`;
        tbody.appendChild(row);
        table.appendChild(tbody);
    }
});