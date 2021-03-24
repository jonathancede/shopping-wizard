// POP-UP TIME WINDOW

// >>>>>>>>>>>>> Test
console.log("Time-window.js loaded");


// >>>>>>>>>>>>> Window element
var timeWindow = document.getElementById("time-window");
console.log("Time window:", timeWindow);


// >>>>>>>>>>>>> Date calculation
var currentTime = new Date().getTime();
var minute = (1000)*60;
var fiveMinutes = currentTime + (minute*5);

var minutesLeft = new String;
console.log(minutesLeft);

//console.log("Current time", currentTime);
//console.log("Five minutes later", fiveMinutes);


// >>>>>>>>>>>>> Time intervals
// Tracking seconds
function eachSecond(){
    console.log("Second");
}
//setInterval(eachSecond, 1000)

// Tracking five seconds
function fiveSeconds(){
    // Hide pop-up window after 5 seconds of showing-up
    timeWindow.style.display="none";
}

setTimeout(fiveSeconds, 5000);

