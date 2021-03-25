// MAIN PAGE PRICE

// Test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("Main page price");



// HTML elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Plant
let plantWrapper = document.getElementById("type-plant-wrapper");

let plantName = document.querySelector("#type-plant-wrapper h2");
let plantNameText = plantName.innerHTML;

let plantPrice = document.getElementById("ttype-plant-total");
let plantPriceText = plantPrice.innerHTML;

document.getElementById("plant1").addEventListener("click", addPlant);
document.getElementById("plant2").addEventListener("click", addPlant);
document.getElementById("plant3").addEventListener("click", addPlant);
document.getElementById("plant4").addEventListener("click", addPlant);

// Base
let baseType = document.querySelector("#type-base-wrapper h2");
let baseText = baseType.innerHTML;



// Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Total
function addTotal(){
}

// Plant
function addPlant(){
    // Show element
    plantWrapper.style.display = "block";
    // Replace plant name
    plantName.innerHTML = purchase.typeOfPlant;
    // Replace price
    plantPrice.innerHTML = purchase.

    console.log("Plant added");

}

// Base
function addBase(){

}

// Message
function addMessage(){

}