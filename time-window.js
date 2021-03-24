// POP-UP TIME WINDOW

// >>>>>>>>>>>>> Test
//console.log("Time-window.js loaded");


// >>>>>>>>>>>>> Window element
var timeWindow = document.getElementById("time-window");
console.log("Time window:", timeWindow);
var timeTextElement = document.getElementById("minutes-left");
console.log("Minutes left:", timeTextElement);


// >>>>>>>>>>>>> Date calculation
var currentTime = new Date().getTime();
var minute = (1000)*60;
var fiveMinutes = currentTime + (minute*5);

// Minutes left
var miliSecondsLeft = new String;
miliSecondsLeft = fiveMinutes-currentTime;
// Convert miliseconds into seconds
secondsLeft = miliSecondsLeft/1000;
// Convert seconds into minutes
minutesLeft = secondsLeft/60;
timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;
// Test
console.log("Initial minute:", minutesLeft);

// >>>>>>>>>>>>> Time intervals
// Tracking minutes
function eachMinute(){
    console.log("Minute");
    minutesLeft -= 1; // Remove one minute
    console.log("Minutes left", minutesLeft);
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;
}

setInterval(eachMinute, minute)

// Tracking five seconds
function fiveSeconds(){
    // Hide pop-up window after 5 seconds of showing-up
    timeWindow.style.display="none";
}
//setTimeout(fiveSeconds, 5000);

