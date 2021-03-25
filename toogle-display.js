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
    phone: new String,
    /*---- Global variables to store the details of Shipping ----*/
    typeOfShipping: 1,
    isGift: false,
    giftMessage: new String
};

// Test print
console.log(">>>>>>>>>>>>>> Test:", purchase.typeOfPlant);

function CheckAndNextPage(event){
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
    console.log(indexCurrentPage);
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
    console.log(indexCurrentPage);
}