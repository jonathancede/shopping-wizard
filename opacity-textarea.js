document.getElementById("custom-message-id").addEventListener("click", textArea_opacity, true);
document.getElementById("gift-message-id").addEventListener("click", textArea_opacity, true);


function textArea_opacity(event){
    var typeMessage = event.currentTarget.id;

    if(typeMessage == "custom-message-id"){
        var checkbox = document.getElementById("custom-message-id");
        var textArea = document.getElementById("custom-text");

        // Toggle purchase "iscustomMessage" property
        if(checkbox.checked == true){
            purchase.isCustomMessage = true;
        } else {
            purchase.isCustomMessage = false;
        }
    }
    else{
        var checkbox = document.getElementById("gift-message-id");
        var textArea = document.getElementById("gift-text");

        // Toggle purchase "isGift" property
        if(checkbox.checked == true){
            purchase.isGift = true;
        } else {
            purchase.isGift = false;
        }
    }

    if (checkbox.checked == true){
        textArea.style.opacity = "100%";
        textArea.disabled = false;
    } else {
        textArea.style.opacity = "20%";
        textArea.disabled = true;
    }
    console.log(purchase.isCustomMessage);
}

