document.addEventListener('DOMContentLoaded', function () {
    var form = document.forms[0];
    var error_message = document.getElementsByTagName('small')[0];
    var input = document.getElementById('uname');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        userKeyPress();
    });
    input.addEventListener('keypress',function () {
        function userKeyPress() {
            if (input.value.trim() === "") {
                error_message.innerHTML = `Enter username`;
            } else if (input.value.length < 4) {
                error_message.innerHTML = `Name Must be 4 charecters or more`;
            } else {
                error_message.innerHTML = '';
                //   alert('successfully Completed');
            }
        }
    })
    //.addEvenListener('keypress',userKeyPress);
});