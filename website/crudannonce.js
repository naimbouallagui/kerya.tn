function addAnnonce() {

    // book a space on localstorage as a list
    let listAnnonce = JSON.parse(localStorage.getItem("Annonce"));

    if (listAnnonce == null) {
        listAnnonce = [];
    }
    console.log(listAnnonce)


    // structure of object to add in localstorage
    var Annonce = {
        title: document.getElementById("property_title").value,
        Adress: document.getElementById("property_address").value,
        rent: document.getElementById("rentinput").value,
        periode: document.getElementById("rentalPeriod").value,
        descr: document.getElementById("property_description").value,
        type: document.getElementById("typeMaison").value,
        buildage: document.getElementById("buildage").value,
        nbbedrooms: document.getElementById("nbbedrooms").value,
        nbbathrooms: document.getElementById("nbbathrooms").value,
        nbkitchen: document.getElementById("nbkitchen").value,
        nbgarage: document.getElementById("nbgarage").value,
        choix: document.getElementById("choix").value,
        choix2: document.getElementById("choix2").value,
        choix3: document.getElementById("choix3").value,
        choix4: document.getElementById("choix4").value,
        map: document.getElementById("map_address").value,

    };
    // push the structure and setitem as a string
    listAnnonce.push(Annonce);
    localStorage.setItem("annonce", JSON.stringify(listAnnonce));
    console.log(localStorage.getItem("Annonce"));
    // } else {
    // console.log("you have to enter details ");
    // }
}