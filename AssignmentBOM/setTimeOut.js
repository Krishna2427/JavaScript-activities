// setTimeout(function(a,b){
//     console.log('i am here', a,b);
//    },5000,20,30);

// var timeOutID;
// function simple(a){
//     console.log(`time out text`, a);
// }
// timeOutID = setTimeout(simple,3000,'settime out here');

// function clearAlert(){
//     clearTimeout(timeOutID);
// }
// var timeOutID;
// function simple(a){
//     console.log(`time out text`, a);
// }
// timeOutID = setInterval(simple,3000,'settime out here');

// function clearAlert(){
//     clearTimeout(timeOutID);
// }

// var intervalID;
// var date;
// function simple(a){
//     date = new Date();
//     console.log(`date`,date);
// }
// intervalID = setInterval(simple,3000,1000);

// function clearAlert(){
//     clearInterval(intervalID);
// }

document.addEventListener('DOMContentLoaded', () => {
    var intervalID;
    var timer = document.getElementById('timer');

    function displyaTimer(){
        var date = new Date();
        var dateTimeString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        timer.innerHTML = dateTimeString;
        timer.style.color = `blue`
    }
    intervalID = setInterval(displyaTimer,1000);
    
    // function clearAlert(){
    //         clearInterval(intervalID);
    // }
    window.stopTimer = function(){
        clearInterval(intervalID);
}
});





//     window.startTimer = ()=>{
        
//     }

// document.addEventListener('DOMContentLoaded', () => {
//     var intervalID;
//     var timer = document.getElementById('timer');

//     function displayTimer() {
//         var date = new Date();
//         timer.innerHTML = date.toLocaleTimeString();
//         timer.style.color = 'blue';
//     }

//     function startTimer() {
//         if (!intervalID) {
//             intervalID = setInterval(displayTimer, 1000);
//         }
//     }

//     function stopTimer() {
//         clearInterval(intervalID);
//         intervalID = null; // Reset the intervalID to allow restarting
//     }

//     // Expose functions to the global scope
//     window.startTimer = startTimer;
//     window.stopTimer = stopTimer;

//     // Attach event listeners to buttons
//     document.getElementById('startButton').addEventListener('click', startTimer);
//     document.getElementById('stopButton').addEventListener('click', stopTimer);
// });