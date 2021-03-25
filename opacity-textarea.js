document.getElementById("custom-message-id").addEventListener("click", textArea_opacity, true);
document.getElementById("gift-message-id").addEventListener("click", textArea_opacity, true);


function textArea_opacity(event){
    var typeMessage = event.currentTarget.id;

    if(typeMessage == "custom-message-id"){
        var checkbox = document.getElementById("custom-message-id");
        var textArea = document.getElementById("custom-text");
    }
    else{
        var checkbox = document.getElementById("gift-message-id");
        var textArea = document.getElementById("gift-text");
    }

    if (checkbox.checked == true){
        textArea.style.opacity = "100%";
        textArea.disabled = false;
    } else {
        textArea.style.opacity = "20%";
        textArea.disabled = true;
    }
}

