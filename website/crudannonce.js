

function test(){
    document.getElementById("p").innerHTML = document.getElementById("rentalPeriod").value ;
    document.getElementById("p").innerHTML = document.getElementById("typemaison").value;
    document.getElementById("p").innerHTML = document.getElementById("buildage").value;
    document.getElementById("p").innerHTML = document.getElementById("inbbedrooms").value;
    document.getElementById("p").innerHTML = document.getElementById("nbbathrooms").value;
    document.getElementById("p").innerHTML = document.getElementById("nbkitchen").value;
    document.getElementById("p").innerHTML = document.getElementById("nbgarage").value;
    document.getElementById("p").innerHTML = document.getElementById("choix").value;
    document.getElementById("p").innerHTML = document.getElementById("choix2").value;
    document.getElementById("p").innerHTML = document.getElementById(" choix3").value;
    document.getElementById("p").innerHTML = document.getElementById("choix4").value;
    
    }



function addAnnonce() {

    // book a space on localstorage as a list
    let listAnnonce= JSON.parse(localStorage.getItem("Annonce"));
    
    if (listAnnonce == null) {
        listAnnonce = [];
    }
    if (
        (document.getElementById("property_title").value !== "") &&
        ((document.getElementById("property_address").value !== "") &&(document.getElementById("rentinput").value !== "") 
        &&(document.getElementById("rentalPeriod").value !== "") &&(document.getElementById("property_description").value !== "")
        ) 
     ) {
        // structure of object to add in localstorage
        var Annonce = {
            
            title: document.getElementById("property_title").value,
            Adress: document.getElementById("property_address").value,
            rent: document.getElementById("rentinput").value,
            periode: document.getElementById("rentalPeriod").value,
            descr: document.getElementById("property_description").value,
            map: document.getElementById("map_address").value,
            
        };
        // push the structure and setitem as a string
        listAnnonce.push(Annonce);
        localStorage.setItem("annonce", JSON.stringify(listAnnonce));
        console.log(localStorage.getItem("Annonce"));
    } else {
        console.log("you have to enter details ");
    }
}