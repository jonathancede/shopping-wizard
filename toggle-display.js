var indexCurrentPage = 1;       // This variable indicates the index of the current page.
let priceCount = 16.00;
var percentage = document.getElementById("timeline-line-percentage");

// Timeline circles
var circle1 = document.getElementById("circle-1");
var circle2 = document.getElementById("circle-2");
var circle3 = document.getElementById("circle-3");
var circle4 = document.getElementById("circle-4");

// Timeline texts
var timelineText1 = document.getElementById("timeline-text-1");
var timelineText2 = document.getElementById("timeline-text-2");
var timelineText3 = document.getElementById("timeline-text-3");
var timelineText4 = document.getElementById("timeline-text-4");


/*---- This is the object where the information will be storaged ----*/
var purchase = {
    /*---- Global variables to store the product details ----*/
    typeOfPlant: 1,
    quantity: 1,
    typeOfBase: 1,
    isCustomMessage: false,
    customMessage: new String,
    totalPriceCount: 16.00,
    /*---- Global variables to store the details of Profile ----*/
    userName: new String,
    email: new String,
    password: new String,
    /*---- Global variables to store the details of Address ----*/
    firstName: new String,
    lastName: new String,
    birthday: new String,
    addressOne: new String,
    addressTwo: new String,
    postalCode: new String,
    country: new String,
    prePhone: new String,
    phone: new String,
    /*---- Global variables to store the details of Shipping ----*/
    typeOfShipping: 1,
    isGift: false,
    giftMessage: new String
};

document.getElementById("buy-button").addEventListener("click", StorageDataAndNextPage, true);
document.getElementById("profile-form").addEventListener("submit", CheckPassword, true);
document.getElementById("address-form").addEventListener("submit", StorageDataAndNextPage, true);
document.getElementById("confirm-button-shipping").addEventListener("click", StorageDataAndNextPage, true);

document.getElementById("back-button-profile").addEventListener("click", BackPage);
document.getElementById("back-button-address").addEventListener("click", BackPage);
document.getElementById("back-button-shipping").addEventListener("click", BackPage);
document.getElementById("back-button-finish").addEventListener("click", BackPage);

function isValid(str){
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(str);
}

function CheckPassword(event){
    event.preventDefault();

    var passwordStr = new String;
    passwordStr = document.getElementById("user-password").value;
    var isNumber = false;
    var isUpper = false;
    var isLower = false;
    var isSpecial = false;

    for(i=0 ; i<passwordStr.length ; i++){
        var number = parseInt(passwordStr[i], 10);

        if(passwordStr[i] == passwordStr[i].toUpperCase()){
            isUpper = true;
        }
        if(passwordStr[i] == passwordStr[i].toLowerCase()){
            isLower = true;
        }
        if(Number.isInteger(number)){
            isNumber = true;
        }
        if(isValid(passwordStr[i])){
            isSpecial = true;
        }
    }

    if((isNumber == true) && (isUpper == true) && (isLower == true) && (isSpecial == true)){
        var confirmText = document.getElementById("user-password-confirm").value;

        document.getElementById("user-password").style.backgroundColor = "#dcf1eb";
        document.getElementById("user-password").style.borderLeft = "12px solid #dcf1eb";
        document.getElementById("user-password").style.color = "#00d5c2";

        if(confirmText == passwordStr){
            StorageDataAndNextPage(event);

            document.getElementById("user-password-confirm").style.backgroundColor = "#dcf1eb";
            document.getElementById("user-password-confirm").style.borderLeft = "12px solid #dcf1eb";
            document.getElementById("user-password-confirm").style.color = "#00d5c2";
        }
        else{
            document.getElementById("user-password-confirm").style.backgroundColor = "#f3d8da";
            document.getElementById("user-password-confirm").style.borderLeft = "12px solid #f3d8da";
            document.getElementById("user-password-confirm").style.color = "#d22b41";
        }
    }
    else{
        document.getElementById("user-password").style.backgroundColor = "#f3d8da";
        document.getElementById("user-password").style.borderLeft = "12px solid #f3d8da";
        document.getElementById("user-password").style.color = "#d22b41";
    }
}

function StorageDataAndNextPage(event){
    event.preventDefault();

    switch (indexCurrentPage) {
        case 1:
            var mainleftCurrentPage = document.getElementById("main-left-mp");
            var mainRightCurrentPage = document.getElementById("main-right-mp");
            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-profile");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            purchase.quantity = document.getElementById("quantity-box").value;
            if(purchase.isCustomMessage == true){
                purchase.customMessage = document.getElementById("custom-text").value;
            }
            purchase.totalPriceCount = priceCount * purchase.quantity;

            // Timeline
            percentage.style.width = "0%";
            circle1.classList.toggle("enabled-circle");
            timelineText1.classList.toggle("timeline-text-enabled");
            
            indexCurrentPage++;
            break;
        case 2:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-profile");
            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-address");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            purchase.userName = document.getElementById("user-name").value;
            purchase.email = document.getElementById("user-mail").value;
            purchase.password = document.getElementById("user-password").value;

            // Timeline
            percentage.style.width = "33%";
            circle2.classList.toggle("enabled-circle");
            timelineText2.classList.toggle("timeline-text-enabled");
            
            indexCurrentPage++;
            break;
        case 3:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-address");
            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-shipping");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            purchase.firstName = document.getElementById("user-first-name").value;
            purchase.lastName = document.getElementById("user-last-name").value;
            purchase.birthday = document.getElementById("user-birtdhay").value;
            purchase.addressOne = document.getElementById("user-address-one").value;
            purchase.addressTwo = document.getElementById("user-address-two").value;
            purchase.postalCode = document.getElementById("user-postalcode").value;
            purchase.country = document.getElementById("user-country").value;
            purchase.prePhone = document.getElementById("user-phone-prefix").value;
            purchase.phone = document.getElementById("user-phone").value;

            // Timeline
            percentage.style.width = "66%";
            circle3.classList.toggle("enabled-circle");
            timelineText3.classList.toggle("timeline-text-enabled");
            
            indexCurrentPage++;
            break;
        case 4:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-shipping");
            var mainleftNextPage = document.getElementById("main-left-finish");
            var mainRightNextPage = document.getElementById("main-right-finish");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";
            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            if(purchase.isGift == true){
                purchase.giftMessage = document.getElementById("gift-text").value;
            }

            switch (purchase.typeOfShipping) {
                case 2:
                    purchase.totalPriceCount = priceCount * purchase.quantity;
                    purchase.totalPriceCount += 5.00;
                    break;
                case 3:
                    purchase.totalPriceCount = priceCount * purchase.quantity;
                    purchase.totalPriceCount += 10.00;
                    break;
            }
            
            // Timeline
            percentage.style.width = "99%";
            circle4.classList.toggle("enabled-circle");
            timelineText4.classList.toggle("timeline-text-enabled");
            
            indexCurrentPage++;
            break;
        case 5:
            var mainleftCurrentPage = document.getElementById("main-left-finish");
            var mainRightCurrentPage = document.getElementById("main-right-finish");

            var mainleftNextPage = document.getElementById("main-left-mp");
            var mainRightNextPage = document.getElementById("main-right-mp");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";

            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";


            // indexCurrentPage++;
            indexCurrentPage = 1;
            break;
    }
    console.log(purchase);
}

function BackPage(){
    switch (indexCurrentPage) {
        case 2:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-profile");

            var mainleftNextPage = document.getElementById("main-left-mp");
            var mainRightNextPage = document.getElementById("main-right-mp");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";

            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            // Timeline
            percentage.style.width = "100%";
            circle1.classList.toggle("enabled-circle");
            timelineText1.classList.toggle("timeline-text-enabled");

            indexCurrentPage--;
            break;
        case 3:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-address");

            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-profile");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";

            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            // Timeline
            percentage.style.width = "0%";
            circle2.classList.toggle("enabled-circle");
            timelineText2.classList.toggle("timeline-text-enabled");
        
            indexCurrentPage--;
            break;
        case 4:
            var mainleftCurrentPage = document.getElementById("main-left-resume");
            var mainRightCurrentPage = document.getElementById("main-right-shipping");

            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-address");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";

            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            // Timeline
            percentage.style.width = "33%";
            circle3.classList.toggle("enabled-circle");
            timelineText3.classList.toggle("timeline-text-enabled");
            
            indexCurrentPage--;
            break;
        case 5:
            var mainleftCurrentPage = document.getElementById("main-left-finish");
            var mainRightCurrentPage = document.getElementById("main-right-finish");

            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-shipping");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";

            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";
            
            indexCurrentPage--;
            // indexCurrentPage = 1;

            // Timeline
            percentage.style.width = "66%";
            circle4.classList.toggle("enabled-circle");
            timelineText4.classList.toggle("timeline-text-enabled");

            break;
    }
    console.log(purchase);
}