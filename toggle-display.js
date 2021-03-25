var indexCurrentPage = 1;       // This variable indicates the index of the current page.

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
document.getElementById("profile-form").addEventListener("submit", StorageDataAndNextPage, true);
document.getElementById("address-form").addEventListener("submit", StorageDataAndNextPage, true);
document.getElementById("confirm-button-shipping").addEventListener("click", StorageDataAndNextPage, true);


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
            if(document.getElementById("custom-message-id").checked == true){
                purchase.customMessage = document.getElementById("custom-text").value;
            }

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
            break;
    }
    console.log(purchase);
}