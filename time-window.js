// Pop-up time window functionality

// Test
console.log("Time-window.js loaded");


// Window element
var timeWindow = document.getElementById("time-window");
console.log("Time window:", timeWindow);


// Date calculation
var currentTime = new Date().getTime();
var minute = (1000)*60;
var fiveMinutes = currentTime + (minute*5);

//console.log("Current time", currentTime);
//console.log("Five minutes later", fiveMinutes);


// Time intervals
// Tracking seconds
function eachSecond(){
    console.log("Second");
}

setInterval(eachSecond, 1000)

// Tracking ten seconds
function tenSeconds(){
    timeWindow.style.backgroundColor="red";
}

setTimeout(tenSeconds, 10000);

