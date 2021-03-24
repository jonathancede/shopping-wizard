
// Copied from toggle, to later unificate it all, only testing intentions


function CheckPassword(password)
{var necesarycharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/}
if(password.value.match(necesarycharacters))
{
    if(password == confirmpasword)
    {
    okbutton = document.getElementById="confirm-button";
    okbutton.disabled = false;
    }
}else (okbutton.disabled = true);


// if(ContainsAny(password, [, Number, "term3"])){
//     if(password == confirmpasword)
//     {
//         okbutton = document.getElementById="confirm-button";
//         okbutton.disabled = false;
//     }
//     //do something
//  }else {okbutton.disabled = true;}




// Global purchase dynamic list

