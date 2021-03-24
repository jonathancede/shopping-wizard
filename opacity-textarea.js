document.getElementById("custom-message-id").addEventListener("click", textArea_opacity);

function textArea_opacity() {
    var checkbox = document.getElementById("custom-message-id");
    var textArea = document.getElementById("gift-text");

    if (checkbox.checked == true){
        textArea.style.opacity = "100%";
    } else {
        textArea.style.opacity = "20%";

    }
}