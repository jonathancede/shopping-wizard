document.getElementById("buy-button").addEventListener("click", SetResumeData);
document.getElementById("confirm-button-shipping").addEventListener("click", SetResumeDataFinish);
document.getElementById("confirm-button-finish").addEventListener("click", SetResumeDataEnd);

var plantResumeDataElement = document.getElementById("plant-resume-data");
var baseResumeDataElement = document.getElementById("base-resume-data");
var customMessageResumeDataElement = document.getElementById("custom-message-resume-data");
var priceResumeDataElement = document.getElementById("price-resume-data");
var customMessageResumeDataDivElement = document.getElementById("custom-message-resume-data-div");
var shippingTypeResumeDataElement = document.getElementById("shipping-type-resume-data");
var shippingDateResumeDataElement = document.getElementById("shipping-date-resume-data");

function SetResumeData(){
    switch (purchase.typeOfPlant) {
        case 1:
            plantResumeDataElement.innerHTML = "Var";
            break;
        case 2:
            plantResumeDataElement.innerHTML = "Tri";
            break;
        case 3:
            plantResumeDataElement.innerHTML = "Cam";
            break;
        case 4:
            plantResumeDataElement.innerHTML = "Scap";
            break;
    }

    if(purchase.typeOfBase == 1){
        baseResumeDataElement.innerHTML = "Wooden";
    }
    else{
        baseResumeDataElement.innerHTML = "Concrete";
    }

    if(purchase.isCustomMessage == true){
        customMessageResumeDataDivElement.style.display = "";
        if(purchase.customMessage == ""){
            customMessageResumeDataElement.innerHTML = "No message inserted";
        }
        else{
            customMessageResumeDataElement.innerHTML = purchase.customMessage;
        }
    }
    else{
        customMessageResumeDataDivElement.style.display = "none";
    }

    if(purchase.quantity > 1){
        plantResumeDataElement.innerHTML += " (x" + purchase.quantity + ")";
        baseResumeDataElement.innerHTML += " (x" + purchase.quantity + ")";
        customMessageResumeDataElement.innerHTML += " (x" + purchase.quantity + ")";
    }

    var price = purchase.totalPriceCount.toFixed(2);
    priceResumeDataElement.innerHTML = price + "€";
}

function SetResumeDataFinish(){
    document.getElementById("plant-resume-data-finish").innerHTML = plantResumeDataElement.innerHTML;
    document.getElementById("base-resume-data-finish").innerHTML = baseResumeDataElement.innerHTML;

    var price = purchase.totalPriceCount.toFixed(2);
    document.getElementById("total-price-finish-data").innerHTML = price + "€";

    if(purchase.isCustomMessage == true){
        document.getElementById("custom-message-resume-data-finish-div").style.display = "";
        if(purchase.customMessage == ""){
            document.getElementById("custom-message-resume-data-finish").innerHTML = "No message inserted";
        }
        else{
            document.getElementById("custom-message-resume-data-finish").innerHTML = customMessageResumeDataElement.innerHTML;
        }
    }
    else{
        document.getElementById("custom-message-resume-data-finish-div").style.display = "none";
    }
    
    switch (purchase.typeOfShipping) {
        case 1:
            shippingTypeResumeDataElement.innerHTML = "Free shipping (72h)";
            shippingDateResumeDataElement.innerHTML = "(Since " + day2.getDate() + "/" + (day2.getMonth()+1) + "/" + day2.getFullYear() + " to " + day3.getDate() + "/" + (day3.getMonth()+1) + "/" + day3.getFullYear() + ")";
            break;
        case 2:
            shippingTypeResumeDataElement.innerHTML = "Extra shipping (48h)";
            shippingDateResumeDataElement.innerHTML = "(Since " + day1.getDate() + "/" + (day1.getMonth()+1) + "/" + day1.getFullYear() + " to " + day2.getDate() + "/" + (day2.getMonth()+1) + "/" + day2.getFullYear() + ")";
            break;
        case 3:
            shippingTypeResumeDataElement.innerHTML = "Premium shipping (24h)";
            shippingDateResumeDataElement.innerHTML = "(Since " + currentDay.getDate() + "/" + (currentDay.getMonth()+1) + "/" + currentDay.getFullYear() + " to " + day1.getDate() + "/" + (day1.getMonth()+1) + "/" + day1.getFullYear() + ")";
            break;
    }
}

function SetResumeDataEnd(){
    document.getElementById("plant-resume-data-end").innerHTML = plantResumeDataElement.innerHTML;
    document.getElementById("base-resume-data-end").innerHTML = baseResumeDataElement.innerHTML;

    if(purchase.isCustomMessage == true){
        document.getElementById("custom-message-resume-data-end-div").style.display = "";
        if(purchase.customMessage == ""){
            document.getElementById("custom-message-resume-data-end").innerHTML = "No message inserted";
        }
        else{
            document.getElementById("custom-message-resume-data-end").innerHTML = customMessageResumeDataElement.innerHTML;
        }
    }
    else{
        document.getElementById("custom-message-resume-data-end-div").style.display = "none";
    }

    document.getElementById("shipping-type-resume-data-end").innerHTML = shippingTypeResumeDataElement.innerHTML;
    document.getElementById("shipping-date-resume-data-end").innerHTML = shippingDateResumeDataElement.innerHTML;

    var price = purchase.totalPriceCount.toFixed(2);
    document.getElementById("total-price-end-data").innerHTML = price + "€";

    document.getElementById("final-text").innerHTML = "Thank you, " + purchase.firstName + " " + purchase.lastName + ", your item has been shipped!<br>We have sent the order details to your email!";

    document.getElementById("time-text").innerHTML = "Your purchase took: " + finishMinutes + " minutes and " + finishSeconds + " seconds";
}