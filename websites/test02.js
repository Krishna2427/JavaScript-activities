document.addEventListener('DOMContentLoaded', ()=>{
    var signInUser = document.getElementById('signIn-User');
    var sign_container =  document.getElementById('sign-container');

   // var forms = document.getElementById('myForm')
   // console.log(forms)
   signInUser.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log(e);
        var forms = document.getElementById('myForm'); 
            forms.style.display = 'block';  
    });
     document.addEventListener('click', (e) =>{
        if(sign_container.contains(e.target) && !signInUser.contains(e.target)){
            sign_container.style.display = 'none';
        }
     })
    var login = document.getElementById('login');
    var login_Container = document.getElementById('login-Container');
    
    login.addEventListener('click', (e) => {
        e.preventDefault();
        
        var loginForm = document.getElementById('loginForm');
        console.log(loginForm);
        loginForm.style.display = 'block';
    });
    document.addEventListener('click', (e) => {
        if (!login_Container.contains(e.target) && !login.contains(e.target)) {
            login_Container.style.display = 'none';
        }
        })
})