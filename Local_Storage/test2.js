// ClearContent is now in the global scope
function ClearContent() {
    localStorage.removeItem('student');
    displayStudentData();
}

//document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.forms[0];
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('student-name').value;
        const age = document.getElementById('student-age').value;
        saveStudentData(name, age);
        myForm.reset();
    });

    function saveStudentData(name, age) {
        const student = { name, age };
        localStorage.setItem('student', JSON.stringify(student));
    }

    function displayStudentData() {
        const studentData = localStorage.getItem('student');
        const displayElement = document.getElementById('displayData');
        if (studentData) {
            const student = JSON.parse(studentData);
            displayElement.textContent = `Name: ${student.name}, Age: ${student.age}`;
        } else {
            displayElement.textContent = 'No student data stored yet';
        }
    }

    displayStudentData();
//});