// POP-UP TIME WINDOW

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Test
//console.log("Time-window.js loaded");


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Window element
var timeWindow = document.getElementById("time-window");
//console.log("Time window:", timeWindow);
var timeTextElement = document.getElementById("minutes-left");
//console.log("Minutes left:", timeTextElement);
var windowCross = document.getElementById("time-cross");
windowCross.addEventListener("click", closeWindow);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Date calculation
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
//console.log("Initial minute:", minutesLeft);



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Time intervals
// Tracking ten seconds
function tenSeconds(){
    // Hide pop-up window after 10 seconds of showing-up
    timeWindow.style.animation = "timeWindowAnimationOut .4s ease forwards";
}

// Default hiding
setTimeout(tenSeconds, 10000);

// Tracking minutes
function eachMinute(){
    minutesLeft -= 1; // Remove one minute
    console.log("Minutes left", minutesLeft);
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;
    timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
    // Hiding window after ten seconds
    setTimeout(tenSeconds, 10000);
}

// Execute eachMinute function every minute
setInterval(eachMinute, 20000)




