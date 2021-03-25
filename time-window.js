// POP-UP TIME WINDOW

// Test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// console.log("Time-window.js loaded");


// Global variables >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Window element
var timeWindow = document.getElementById("time-window");
//console.log("Time window:", timeWindow);
var timeTextElement = document.getElementById("minutes-left");
var timeTextTitle = document.querySelector("#time-window-text h2");
// console.log(timeTextTitle.innerHTML);
//console.log("Minutes left:", timeTextElement);
var windowCross = document.getElementById("time-cross");
windowCross.addEventListener("click", closeWindow);
var miliSecondsLeft = new String;
var remainingTime = new String;
var currentTime;
var fiveMinutes;
var secondsLeft;
var minutesLeft;

var tenSecondsTimeout;
var eachMinuteInterval;
var subtractSecondInterval;

var finishTotalSeconds;
var finishMinutes;
var finishSeconds;

const minute = 1000*60;


// HTML elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("buy-button").addEventListener("click", initializeTime);
document.getElementById("back-button-profile").addEventListener("click", resetTime);

// Hide pop-up window if last button is clicked
document.getElementById("confirm-button-finish").addEventListener("click", closeWindowFinish);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Time intervals
// Half second to display none
function displayNone(){
    timeWindow.style.display = "none";
}

// Tracking ten seconds
function tenSeconds(){
    // Disappearing pop-up window
    timeWindow.style.animation = "timeWindowAnimationOut .4s ease forwards";
    // Setting display to none
    setTimeout(displayNone, 500);
}

// Back to main page
function backToMain(){
    // Clearing all intervals
    resetTime();

    // Setting current page to main page
    switch (indexCurrentPage) {
        case 1:
            var mainleftCurrentPage = document.getElementById("main-left-mp");
            var mainRightCurrentPage = document.getElementById("main-right-mp");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            break;
        case 2:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-profile");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            break;
        case 3:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-address");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            break;
        case 4:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-shipping");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            break;
        case 5:
            var mainleftCurrentPage = document.getElementById("main-left-finish");
            var mainRightCurrentPage = document.getElementById("main-right-finish");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            break;
    }

    // Showing back the main page
    var mainleftCurrentPage = document.getElementById("main-left-mp");
    var mainRightCurrentPage = document.getElementById("main-right-mp");
    mainleftCurrentPage.style.display = "flex";
    mainRightCurrentPage.style.display = "flex";

    // Reset index page
    indexCurrentPage = 1;
}

// Tracking minutes
function eachMinute(){
    minutesLeft -= 1; // Remove one minute
    console.log("Minutes left", minutesLeft);
    // Updating string containing minutes
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;
    // Appearing pop-up window
    timeWindow.style.display = "flex";
    timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
    // Hiding window after ten seconds
    setTimeout(tenSeconds, 10000);
}

// Clicking cross function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function closeWindow(event){
    // Disappearing pop-up window
    timeWindow.style.animation = "timeWindowAnimationOut .4s ease forwards";
    // Setting display to none
    setTimeout(displayNone, 500);
}

// Close window at finish page
function closeWindowFinish(){
    finishTotalSeconds = 300 - secondsLeft;
    finishMinutes = parseInt(finishTotalSeconds/60);
    finishSeconds = parseInt(((finishTotalSeconds/60) % 1)*60);

    closeWindow();
    resetTime();
}

// Clicking cross function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function subtractSecond(){
    secondsLeft -= 1;
    minutesConverted = parseInt(secondsLeft/60);
    secondsConverted = parseInt(((secondsLeft/60) % 1)*60);
    remainingTime = `Current time ${minutesConverted} minutes and ${secondsConverted} seconds.`

    // Go back to main page if there's no time left
    if (secondsLeft==0) {
        // Updating string in window
        timeTextTitle.innerHTML = "You have exceeded 5 minutes";
        timeTextElement.innerHTML = "Going back to main page";
        // Appearing pop-up window
        timeWindow.style.display = "flex";
        timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
        // Hiding pop-up window after ten seconds
        setTimeout(tenSeconds, 10000);
        // Hiding pop-up window after ten seconds
        setTimeout(backToMain, 10000);
    }

    // Remaining minutes and seconds
    console.log(remainingTime);
}

// Executed when user clicks "back" to main page
function resetTime(){
    // Reseting all variables
    miliSecondsLeft = new String;
    remainingTime = new String;
    currentTime = 0;
    fiveMinutes = 0;
    secondsLeft = 0;
    minutesLeft = 0;

    // Reset time window title
    timeTextTitle.innerHTML = "Hurry up!";

    // Hide pop-up window
    timeWindow.style.display = "none";

    //Reset all timeline DOM elements
    if (circle1.classList.contains("enabled-circle")){
        circle1.classList.remove("enabled-circle")
    }
    if (circle2.classList.contains("enabled-circle")){
        circle2.classList.remove("enabled-circle")
    }
    if (circle3.classList.contains("enabled-circle")){
        circle3.classList.remove("enabled-circle")
    }
    if (circle4.classList.contains("enabled-circle")){
        circle4.classList.remove("enabled-circle")
    }


    if (timelineText1.classList.contains("timeline-text-enabled")){
        timelineText1.classList.remove("timeline-text-enabled")
    }
    if (timelineText2.classList.contains("timeline-text-enabled")){
        timelineText2.classList.remove("timeline-text-enabled")
    }
    if (timelineText3.classList.contains("timeline-text-enabled")){
        timelineText3.classList.remove("timeline-text-enabled")
    }
    if (timelineText4.classList.contains("timeline-text-enabled")){
        timelineText4.classList.remove("timeline-text-enabled")
    }

    // Reseting all timeouts/intervals
    clearTimeout(tenSecondsTimeout);
    clearInterval(eachMinuteInterval);
    clearInterval(subtractSecondInterval);
}

// Executed when user clicks "buy" at main page
function initializeTime(){

    currentTime = new Date().getTime();
    fiveMinutes = currentTime + (minute*5);
    // Minutes left
    miliSecondsLeft = fiveMinutes-currentTime;
    // Convert miliseconds into seconds
    secondsLeft = miliSecondsLeft/1000;
    // Convert seconds into minutes
    minutesLeft = secondsLeft/60;

    // Appearing pop-up window
    timeWindow.style.opacity = "0%";
    timeWindow.style.display = "flex";
    timeWindow.style.animation = "timeWindowAnimationIn .4s ease forwards";
    timeTextElement.innerHTML = `You have ${minutesLeft} minutes left`;

    // Hiding pop-up window after ten seconds
    tenSecondsTimeout = setTimeout(tenSeconds, 5000);

    // Execute eachMinute function every minute
    eachMinuteInterval = setInterval(eachMinute, minute);

    // Every second
    subtractSecondInterval = setInterval(subtractSecond, 1000);
}


