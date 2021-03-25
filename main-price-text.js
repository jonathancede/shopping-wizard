// MAIN PAGE PRICE

// Test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("Main page price");



// HTML elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Plant
let plantWrapper = document.getElementById("type-plant-wrapper");

let plantName = document.querySelector("#type-plant-wrapper h2");
let plantNameText = plantName.innerHTML;

let plantPrice = document.getElementById("type-plant-total");
let plantPriceText = plantPrice.innerHTML;

document.getElementById("plant1").addEventListener("click", addPlant);
document.getElementById("plant2").addEventListener("click", addPlant);
document.getElementById("plant3").addEventListener("click", addPlant);
document.getElementById("plant4").addEventListener("click", addPlant);

// Base
let baseType = document.querySelector("#type-base-wrapper h2");
let baseText = baseType.innerHTML;


// Quantity



// Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Total
function addTotal(){
}

// Plant
function addPlant(){
    console.log("test >>>>>>>>>>>>>>>>>>");

    // Adapt plant price
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

}

// Message
function addMessage(){

}