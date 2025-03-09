const boutonsInfo= document.querySelectorAll(".info");
const modale= document.querySelector(".modale");

for(let i=0; i<boutonsInfo.length; i++){
    
    boutonsInfo[i].addEventListener("click", OuvreModale);
}

function OuvreModale(){
    modale.classList.add("visible")
    let elementTexte= document.createElement("p");
    elementTexte.textContent= "Modale";
    modale.appendChild(elementTexte);
    console.log("ello")
}

