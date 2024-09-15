document.addEventListener('DOMContentLoaded',()=>{
      
   var myForm = document.getElementById('myForm');
        var isValid = true;
         myForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            myForm ="";
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
             if(name ===''){
                 document.getElementById('nameError').innerHTML =`Name is Required`;
                 isValid = false;
             }else{
                document.getElementById('nameError').innerHTML =``;
             }
             var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
             if(!email.match(emailPattern) || email ===''){
                document.getElementById(`emailError`).innerHTML =`Please give valid address`;
                isValid = false;
             }else{
                document.getElementById(`emailError`).innerHTML =``;
             }
         })
})