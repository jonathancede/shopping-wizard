
// Copied from toggle, to later unificate it all, only testing intentions


/*---- This is the object where the information will be storaged ----*/
var purchase = {
    /*---- Global variables to store the product details ----*/
    typeOfPlant: 1,
    quantity: 1,
    typeOfBase: 1,
    isCustomMessage: false,
    customMessage: new String,
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

purchase.userName= document.getElementById("user-name");
purchase.email= document.getElementById("user-mail");
purchase.password= document.getElementById("user-password"); /* is password*/
var confirmpasword= document.getElementById("user-password-confirm"); /* is password confirm*/


if(ContainsAny(password, [, Number, "term3"])){
    if(password == confirmpasword ||
        password.includes())
    {
        okbutton = document.getElementById="confirm-button";
        okbutton.disabled = false;
    }
    //do something
 }else {okbutton.disabled = true;}




// Global purchase dynamic list

