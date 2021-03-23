var indexCurrentPage = 1;       // This variable indicates the index of the current page.

/*---- Global variables to store the product details ----*/
var typeOfPlant;
var quantity;
var typeOfBase;
var isCustomMessage;
var CustomMessage;

/*---- Global variables to store the details of Address ----*/
var firstName;
var lastName;
var birthday;
var addressOne;
var addressTwo;
var postalCode;
var country;
var phone;

/*---- Global variables to store the details of Shipping ----*/
var typeOfShipping;
var isGift;
var giftMessage;
// var wrapper;

function CheckAndNextPage(){
    switch (indexCurrentPage) {
        case 1:
            var mainleftCurrentPage = document.getElementById("main-left-mp");
            var mainRightCurrentPage = document.getElementById("main-right-mp");

            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-address");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";

            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";

            indexCurrentPage++;
            break;
        case 2:
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
        case 3:
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
        case 4:
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
            var mainRightCurrentPage = document.getElementById("main-right-address");

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
            var mainRightCurrentPage = document.getElementById("main-right-shipping");

            var mainleftNextPage = document.getElementById("main-left-resume");
            var mainRightNextPage = document.getElementById("main-right-address");

            mainleftCurrentPage.style.display = "none";
            mainRightCurrentPage.style.display = "none";

            mainleftNextPage.style.display = "flex";
            mainRightNextPage.style.display = "flex";
            
            indexCurrentPage--;
            break;
        case 4:
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