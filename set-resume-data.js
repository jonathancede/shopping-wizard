document.getElementById("buy-button").addEventListener("click", SetResumeData);

var plantResumeDataElement = document.getElementById("plant-resume-data");
var baseResumeDataElement = document.getElementById("base-resume-data");
var customMessageResumeDataElement = document.getElementById("custom-message-resume-data");
var priceResumeDataElement = document.getElementById("price-resume-data");
var customMessageResumeDataDivElement = document.getElementById("custom-message-resume-data-div");

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

    priceResumeDataElement.innerHTML = purchase.totalPriceCount + "€";
}