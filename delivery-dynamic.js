
var firstTypeShippingElement = document.getElementsByClassName("input-type-shipping")[0];
var secondTypeShippingElement = document.getElementsByClassName("input-type-shipping")[1];
var thirdTypeShippingElement = document.getElementsByClassName("input-type-shipping")[2];

firstTypeShippingElement.addEventListener("click", DeliveryDynamic,true);
secondTypeShippingElement.addEventListener("click", DeliveryDynamic,true);
thirdTypeShippingElement.addEventListener("click", DeliveryDynamic,true);
document.getElementById("address-form").addEventListener("submit", DeliveryDynamicFromAddress,true);

function DeliveryDynamicFromAddress(event){
    event.preventDefault();
    DeliveryDynamic(event);
}

function DeliveryDynamic(event){
    var textElement = document.getElementById("arrival-dates");

    var currentDay = new Date();
    var day1 = new Date();
    day1.setDate(currentDay.getDate() + 1);
    var day2 = new Date();
    day2.setDate(currentDay.getDate() + 2);
    var day3 = new Date();
    day3.setDate(currentDay.getDate() + 3);

    if(firstTypeShippingElement.checked == true){
        textElement.innerHTML = "Your order will arrive between <br>" + day2.getDate() + "/" + day2.getMonth() + "/" + day2.getFullYear() + " and " + day3.getDate() + "/" + day3.getMonth() + "/" + day3.getFullYear() + ".";
    }
    else if(secondTypeShippingElement.checked == true){
        textElement.innerHTML = "Your order will arrive between <br>" + day1.getDate() + "/" + day1.getMonth() + "/" + day1.getFullYear() + " and " + day2.getDate() + "/" + day2.getMonth() + "/" + day2.getFullYear() + ".";
    }
    else if(thirdTypeShippingElement.checked == true){
        textElement.innerHTML = "Your order will arrive between <br>" + currentDay.getDate() + "/" + currentDay.getMonth() + "/" + currentDay.getFullYear() + " and " + day1.getDate() + "/" + day1.getMonth() + "/" + day1.getFullYear() + ".";
    }
}