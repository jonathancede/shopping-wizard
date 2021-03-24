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


document.getElementById("buy-button").addEventListener("click", initializeTime);

function initializeTime(event){
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
    // Appearing element
    timeWindow.style.opacity = "0%";
    timeWindow.style.display = "flex";
    timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
    // Loading remaining minutes text
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Time intervals
// Half second to display none
function displayNone(){
    timeWindow.style.display= "none";
}

// Tracking ten seconds
function tenSeconds(){
    // Disappearing element
    timeWindow.style.animation = "timeWindowAnimationOut .4s ease forwards";
    // Setting display to none
    setInterval(displayNone, 500);
}

// Hiding window after ten seconds
setTimeout(tenSeconds, 10000);

// Tracking minutes
function eachMinute(){
    minutesLeft -= 1; // Remove one minute
    console.log("Minutes left", minutesLeft);
    // Updating string containing minutes
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;
    // Appearing element
    timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
    // Hiding window after ten seconds
    setTimeout(tenSeconds, 10000);
}

// Execute eachMinute function every minute
setInterval(eachMinute, 20000)



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Clicking cross function
function closeWindow(event){
    // Disappearing element
    timeWindow.style.animation = "timeWindowAnimationOut .4s ease forwards";
    // Setting display to none
    setInterval(displayNone, 500);
}




