// TIMELINE

// Test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("timeline-functionality.js loaded");


// Global variables >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HTML elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Adding event listeners to buttons
document.getElementById("buy-button").addEventListener("click", updateTimeline);
document.getElementById("profile-form").addEventListener("submit", updateTimeline);
document.getElementById("address-form").addEventListener("submit", updateTimeline);
document.getElementById("confirm-button-shipping").addEventListener("click", updateTimeline);

// Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function updateTimeline(){
    console.log("Test button");

    switch(indexCurrentPage){
        case 1:
            percentage.style.width = "0%"
            break;
        case 2:
            break;
        case 3:
            percentage.style.width += "33%";
            console.log("Test print");
            break;
        case 4:
            percentage.style.width += "33%";
            break;
        case 5:
            percentage.style.width += "33%";
            break;
        default:
            console.log("Timeline not executed");
            break;
    }
}












