document.addEventListener('DOMContentLoaded', function() {
     const userForm = document.getElementById('userForm');
     userForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const userInput = document.getElementById('nameInput').value;
        localStorage.setItem('userName', userInput);
        displayUserName()

     })
     function displayUserName(){
         const storeData = localStorage.getItem('userName')
         if(storeData){
            document.getElementById('retrievedName').textContent = storeData;
         }else{
            document.getElementById('retrievedName').textContent = 'no name stored'
         }
     }
     displayUserName();
})