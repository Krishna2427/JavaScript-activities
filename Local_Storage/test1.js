// Function to save student data to local storage
function saveStudentData(name, age) {
    const student = { name, age }; // Create a student object
    localStorage.setItem('student', JSON.stringify(student)); // Save the object as a JSON string
  }
  
  // Function to display student data from local storage
  function displayStudentData() {
    const studentData = localStorage.getItem('student'); // Retrieve the data
    const displayElement = document.getElementById('displayData');
  
    if (studentData) {
      const student = JSON.parse(studentData); // Convert JSON string back to an object
      displayElement.textContent = `Name: ${student.name}, Age: ${student.age}`;
    } else {
      displayElement.textContent = 'No student data stored yet.';
    }
  }
  
  // Function to clear student data from local storage
  function clearStudentData() {
    localStorage.removeItem('student'); // Remove the student data
    displayStudentData(); // Update the display
  }
  
  // Handle form submission to save the student data
   document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
  
    saveStudentData(name, age); // Save data to local storage
    displayStudentData(); // Display the saved data
  
    // Clear form inputs
    document.getElementById('studentForm').reset();
  });
  
  // Display stored data on page load
  displayStudentData();