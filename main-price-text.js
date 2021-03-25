// MAIN PAGE PRICE

// Test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("Main page price");



// HTML elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Plant
let plantName = document.querySelector("#type-plant-wrapper h2");
let plantPrice = document.getElementById("type-plant-total");
// Adding click listener
document.getElementById("plant1").addEventListener("click", addPlant);
document.getElementById("plant2").addEventListener("click", addPlant);
document.getElementById("plant3").addEventListener("click", addPlant);
document.getElementById("plant4").addEventListener("click", addPlant);

// Base
let baseType = document.querySelector("#type-base-wrapper h2");
let basePrice = document.getElementById("base-price-total");
// Adding click listener
document.getElementById("wooden-type").addEventListener("click", addBase);
document.getElementById("concrete-type").addEventListener("click", addBase);

// Message
let messageWrapper = document.getElementById("message-wrapper");
let messageTitle = document.querySelector("#message-wrapper h2");
let messagePrice = document.getElementById("custom-message-total");
// Adding click listener
document.getElementById("custom-message-id").addEventListener("click", addMessage);

// Quantity



// Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Total
function addTotal(){
}

// Plant
function addPlant(){
    // Adapt plant item
    switch(purchase.typeOfPlant){
        // Var
        case 1:
            // Replace plant name
            plantName.innerHTML = "Var";
            // Replace price
            plantPrice.innerHTML = "10.00€";
            break;
        // Tri
        case 2:
            // Replace plant name
            plantName.innerHTML = "Tri";
            // Replace price
            plantPrice.innerHTML = "12.00€";
            break;
        // Cam
        case 3:
            // Replace plant name
            plantName.innerHTML = "Cam";
            // Replace price
            plantPrice.innerHTML = "14.00€";
            break;
        // Scap
        case 4:
            // Replace plant name
            plantName.innerHTML = "Scap";
            // Replace price
            plantPrice.innerHTML = "16.00€";
            break;
    }
}

// Base
function addBase(){
    // Adapt base item
    switch(purchase.typeOfBase){
    // Wooden
    case 1:
        // Replace base name
        baseType.innerHTML = "Wooden base";
        // Replace price
        basePrice.innerHTML = "6.00€";
        break;
    // Concrete
    case 2:
        // Replace base name
        baseType.innerHTML = "Concrete base";
        // Replace price
        basePrice.innerHTML = "4.00€";
        break;
    }
}


// Message
function addMessage(){
    // Adapt message item
    switch(purchase.isCustomMessage){
        // With message
        case true:
            // Show message item
            messageWrapper.style.display = "block";
            // Add message title
            messageTitle.innerHTML = "Custom message";
            // Replace price
            messagePrice.innerHTML = "1.50€";
            break;
        // Without message
        case false:
            // Hide message item
            messageWrapper.style.display = "none";
            break;
        }

}