document.addEventListener('DOMContentLoaded',()=>{
    const myForm = document.forms[0];
    const message_div = document.getElementById('message');
    myForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const name = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
       
        try{
            if(!name){
                throw new Error("Name cannot be empty")
            }
            if(!validateEmail(email)){
                throw new Error("Invalid Email format");
            }
            console.log("form submitted Successfully:", {name:name, email:email});
            message_div.textContent ='Form submitted SuccessFully';
            message_div.style.color = 'green';
        } catch(error){
              console.error("error:", error.message);
              message_div.textContent = `Error:${error.message}`;
              message_div.style.color ='red';
        }
    })

    function validateEmail(email){
         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailPattern.test(email);
    }
})