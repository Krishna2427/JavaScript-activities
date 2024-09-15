document.addEventListener('DOMContentLoaded', () => {
    var intervalID;
    var startTime;
    var timer;
    var totalTime;
    // Function to display the current time
    function displayTimer() {
        timer = document.getElementById('startTime');
        startTime = new Date();
        console.log(startTime);
        var showTime = `${startTime.toLocaleDateString()} ${startTime.toLocaleTimeString()}`;
        timer.innerHTML = showTime;
        timer.style.color = 'blue';
    }
    // Function to start the timer
    window.startTime = () => {
        if (!intervalID) { 
            totalTime = new Date();
            intervalID = setInterval(displayTimer, 1000);
        }
    };
    window.stopTime = () => {
        clearInterval(intervalID);
        intervalID = null;

        if(totalTime){
        var stopTimer = document.getElementById('totalCalTime');
        var pastDate = new Date('2024-08-01T10:00:00'); // Your past date
        var currentDate = new Date();

        var timeDifference = currentDate -  totalTime;

        // Calculate the difference in seconds, minutes, hours, and days
        var seconds = Math.floor(timeDifference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        // Calculate the remaining hours, minutes, and seconds
        var remainHours = hours % 24;
        var remainMinutes = minutes % 60;
        var remainSeconds = seconds % 60;

        stopTimer.innerHTML = `
            Days: ${days} <br>
            Hours: ${remainHours} <br>
            Minutes: ${remainMinutes} <br>
            Seconds: ${remainSeconds}
        `;
        }else{
            stopTimer.innerHTML =''
        }
    };
});