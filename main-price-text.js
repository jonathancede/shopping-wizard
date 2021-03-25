// MAIN PAGE PRICE

// Test >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("Main page price");



// HTML elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Plant
let plantWrapper = document.getElementById("type-plant-wrapper");
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
        baseType.innerHTML = "Wooden";
        // Replace price
        basePrice.innerHTML = "6.00€";
        break;
    // Concrete
    case 2:
        // Replace base name
        baseType.innerHTML = "Concrete";
        // Replace price
        basePrice.innerHTML = "4.00€";
        break;
    }
}


// Message
function addMessage(){

}