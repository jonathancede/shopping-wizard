/*---- Var paths ----*/
const path1VarWooden1 = "Assets/1-Var/Wooden/Var-Wooden-1.jpg";
const path1VarWooden2 = "Assets/1-Var/Wooden/Var-Wooden-2.png";
const path1VarConcrete1 = "Assets/1-Var/Concrete/Var-Concrete-1.jpg";
const path1VarConcrete2 = "Assets/1-Var/Concrete/Var-Concrete-2.jpg";
/*---- Tri paths ----*/
const path2TriWooden1 = "Assets/2-Tri/Wooden/Tri-Wooden-1.png";
const path2TriWooden2 = "Assets/2-Tri/Wooden/Tri-Wooden-2.jpg";
const path2TriConcrete1 = "Assets/2-Tri/Concrete/Tri-Concrete-1.jpg";
const path2TriConcrete2 = "Assets/2-Tri/Concrete/Tri-Concrete-2.jpg";
/*---- Cam paths ----*/
const path3CamWooden1 = "Assets/3-Cam/Wooden/Cam-Wooden-1.jpg";
const path3CamWooden2 = "Assets/3-Cam/Wooden/Cam-Wooden-2.jpg";
const path3CamConcrete1 = "Assets/3-Cam/Concrete/Cam-Concrete-1.jpg";
const path3CamConcrete2 = "Assets/3-Cam/Concrete/Cam-Concrete-2.jpg";
/*---- Scap paths ----*/
const path4ScapWooden1 = "Assets/4-Scap/Wooden/Scap-Wooden-1.jpg";
const path4ScapWooden2 = "Assets/4-Scap/Wooden/Scap-Wooden-2.jpg";
const path4ScapConcrete1 = "Assets/4-Scap/Concrete/Scap-Concrete-1.png";
const path4ScapConcrete2 = "Assets/4-Scap/Concrete/Scap-Concrete-2.jpg";

var indexGallery = 1;

function ImageDynamicMainPage(event){
    var typeChange = event.currentTarget.className;

    if(typeChange == "imageIcon"){
        ImageDynamicByPlant(event);
    }
    else if(typeChange == "typeBase"){
        ImageDynamicByBase(event);
    }
    else{
        ImageDynamicByGallery(event);
    }

    UpdateImages();
}

function ImageDynamicByPlant(event){
    var plantSelected = event.currentTarget.id;

    switch (plantSelected) {
        case "plant1":
            purchase.typeOfPlant = 1;
            event.currentTarget.style.backgroundColor = "#dcf1eb";
            document.getElementById("plant2").style.backgroundColor = "white";
            document.getElementById("plant3").style.backgroundColor = "white";
            document.getElementById("plant4").style.backgroundColor = "white";
            break;
        case "plant2":
            purchase.typeOfPlant = 2;
            event.currentTarget.style.backgroundColor = "#dcf1eb";
            document.getElementById("plant1").style.backgroundColor = "white";
            document.getElementById("plant3").style.backgroundColor = "white";
            document.getElementById("plant4").style.backgroundColor = "white";
            break;
        case "plant3":
            purchase.typeOfPlant = 3;
            event.currentTarget.style.backgroundColor = "#dcf1eb";
            document.getElementById("plant1").style.backgroundColor = "white";
            document.getElementById("plant2").style.backgroundColor = "white";
            document.getElementById("plant4").style.backgroundColor = "white";
            break;
        case "plant4":
            purchase.typeOfPlant = 4;
            event.currentTarget.style.backgroundColor = "#dcf1eb";
            document.getElementById("plant1").style.backgroundColor = "white";
            document.getElementById("plant2").style.backgroundColor = "white";
            document.getElementById("plant3").style.backgroundColor = "white";
            break;
    }
}

function ImageDynamicByBase(event){
    var baseSelected = event.currentTarget.id;

    switch (baseSelected) {
        case "wooden-type":
            purchase.typeOfBase = 1;
            break;
        case "concrete-type":
            purchase.typeOfBase = 2;
    }
}

function ImageDynamicByGallery(event){
    var gallerySelected = event.currentTarget.id;

    switch (gallerySelected) {
        case "photo-gallery1":
            indexGallery = 1;
            event.currentTarget.children[0].style.border = "var(--dark-green) 2px solid";
            document.getElementById("photo-gallery2").children[0].style.border = "transparent";
            break;
        case "photo-gallery2":
            indexGallery = 2;
            event.currentTarget.children[0].style.border = "var(--dark-green) 2px solid";
            document.getElementById("photo-gallery1").children[0].style.border = "transparent";
    }
}

function UpdateImages(){
    var elementImage = document.getElementById("image-general");
    var elementGalleryImage1 = document.getElementById("photo-gallery1").children[0];
    var elementGalleryImage2 = document.getElementById("photo-gallery2").children[0];

    if(purchase.typeOfBase == 1){
        switch (purchase.typeOfPlant) {
            case 1:
                if(indexGallery == 1){ elementImage.setAttribute("src", path1VarWooden1); }
                else{ elementImage.setAttribute("src", path1VarWooden2); }
                elementGalleryImage1.setAttribute("src", path1VarWooden1);
                elementGalleryImage2.setAttribute("src", path1VarWooden2);
                break;
            case 2:
                if(indexGallery == 1){ elementImage.setAttribute("src", path2TriWooden1); }
                else{ elementImage.setAttribute("src", path2TriWooden2); }
                elementGalleryImage1.setAttribute("src", path2TriWooden1);
                elementGalleryImage2.setAttribute("src", path2TriWooden2);
                break;
            case 3:
                if(indexGallery == 1){ elementImage.setAttribute("src", path3CamWooden1); }
                else{ elementImage.setAttribute("src", path3CamWooden2); }
                elementGalleryImage1.setAttribute("src", path3CamWooden1);
                elementGalleryImage2.setAttribute("src", path3CamWooden2);
                break;
            case 4:
                if(indexGallery == 1){ elementImage.setAttribute("src", path4ScapWooden1); }
                else{ elementImage.setAttribute("src", path4ScapWooden2); }
                elementGalleryImage1.setAttribute("src", path4ScapWooden1);
                elementGalleryImage2.setAttribute("src", path4ScapWooden2);
                break;
        }
    }
    else{
        switch (purchase.typeOfPlant) {
            case 1:
                if(indexGallery == 1){ elementImage.setAttribute("src", path1VarConcrete1); }
                else{ elementImage.setAttribute("src", path1VarConcrete2); }
                elementGalleryImage1.setAttribute("src", path1VarConcrete1);
                elementGalleryImage2.setAttribute("src", path1VarConcrete2);
                break;
            case 2:
                if(indexGallery == 1){ elementImage.setAttribute("src", path2TriConcrete1); }
                else{ elementImage.setAttribute("src", path2TriConcrete2); }
                elementGalleryImage1.setAttribute("src", path2TriConcrete1);
                elementGalleryImage2.setAttribute("src", path2TriConcrete2);
                break;
            case 3:
                if(indexGallery == 1){ elementImage.setAttribute("src", path3CamConcrete1); }
                else{ elementImage.setAttribute("src", path3CamConcrete2); }
                elementGalleryImage1.setAttribute("src", path3CamConcrete1);
                elementGalleryImage2.setAttribute("src", path3CamConcrete2);
                break;
            case 4:
                if(indexGallery == 1){ elementImage.setAttribute("src", path4ScapConcrete1); }
                else{ elementImage.setAttribute("src", path4ScapConcrete2); }
                elementGalleryImage1.setAttribute("src", path4ScapConcrete1);
                elementGalleryImage2.setAttribute("src", path4ScapConcrete2);
                break;
        }
    }
}