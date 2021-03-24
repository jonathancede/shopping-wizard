// POP-UP TIME WINDOW

// Test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//console.log("Time-window.js loaded");


// Global variables >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Window element
var timeWindow = document.getElementById("time-window");
//console.log("Time window:", timeWindow);
var timeTextElement = document.getElementById("minutes-left");
//console.log("Minutes left:", timeTextElement);
var windowCross = document.getElementById("time-cross");
windowCross.addEventListener("click", closeWindow);
var miliSecondsLeft = new String;
var remainingTime = new String;
var currentTime;
var fiveMinutes;
var secondsLeft;
var minutesLeft;
const minute = 1000*60;


// HTML elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("buy-button").addEventListener("click", initializeTime);


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
    setTimeout(displayNone, 500);
}


// Tracking minutes
function eachMinute(){
    minutesLeft -= 1; // Remove one minute
    console.log("Minutes left", minutesLeft);
    // Updating string containing minutes
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;
    // Appearing element
    timeWindow.style.display = "flex";
    timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
    // Hiding window after ten seconds
    setTimeout(tenSeconds, 10000);
}


// Clicking cross function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function closeWindow(event){
    // Disappearing element
    timeWindow.style.animation = "timeWindowAnimationOut .4s ease forwards";
    // Setting display to none
    setTimeout(displayNone, 500);
}


// Clicking cross function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function subtractSecond(){
    secondsLeft -= 1;
    minutesConverted = parseInt(secondsLeft/60);
    secondsConverted = parseInt(((secondsLeft/60) % 1)*60);
    remainingTime = `Current time ${minutesConverted} minutes and ${secondsConverted} seconds.`
    console.log(remainingTime);
}


function initializeTime(){
    // Date calculation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    currentTime = new Date().getTime();
    fiveMinutes = currentTime + (minute*5);
    // Minutes left
    miliSecondsLeft = fiveMinutes-currentTime;
    // Convert miliseconds into seconds
    secondsLeft = miliSecondsLeft/1000;
    // Convert seconds into minutes
    minutesLeft = secondsLeft/60;

    // Appearing element
    timeWindow.style.opacity = "0%";
    timeWindow.style.display = "flex";
    timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;

    // Hiding window after ten seconds
    setTimeout(tenSeconds, 10000);

    // Execute eachMinute function every minute
    setInterval(eachMinute, minute);

    // Every second
    setInterval(subtractSecond, 1000);
}