
var termsCond = document.getElementById("terms-conditions-input");
var finishConfirm = document.getElementById("confirm-button-finish")
finishConfirm.disabled = true;

termsCond.addEventListener("click", checkTerms, true);


function checkTerms(){
    console.log(termsCond.checked);
    if (termsCond.checked === true){
        console.log("I accept terms and conditions");
        finishConfirm.style.opacity = "100%";
        finishConfirm.disabled = false;
    } else if (termsCond.checked === false) {
        console.log("Not accepting terms and conditions");
        finishConfirm.style.opacity = "20%";
        finishConfirm.disabled = true;
    }
}
