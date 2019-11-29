function addAnnonce() {

    // book a space on localstorage as a list
    let listAnnonce = JSON.parse(localStorage.getItem("annonce"));

    if (listAnnonce == null) {
        listAnnonce = [];
    }
    console.log(listAnnonce)


    // structure of object to add in localstorage
    var Annonce = {
        id: Math.floor(Math.random() * 1000 + 1),
        title: document.getElementById("property_title").value,
        Adress: document.getElementById("property_address").value,
        rent: document.getElementById("rentinput").value,
        periode: document.getElementById("rentalPeriod").value,
        descr: document.getElementById("property_description").value,
        type: document.getElementById("typeMaison").value,
        price: document.getElementById("price").value,
        nbbedrooms: document.getElementById("nbbedrooms").value,
        nbbathrooms: document.getElementById("nbbathrooms").value,
        features: document.getElementById("chekbox").value,
    };
    // push the structure and setitem as a string
    listAnnonce.push(Annonce);
    localStorage.setItem("annonce", JSON.stringify(listAnnonce));
    console.log(localStorage.getItem("annonce"));
    // } else {
    // console.log("you have to enter details ");
    // }
}

function searchAnn() {
    var listAnnonce = JSON.parse(localStorage.getItem("annonce"));
    var citeapp = document.getElementById("cite").value;
    var rent1 = document.getElementById("rent").value;
    var type = document.getElementById("type").value;
    var nbBedroom = document.getElementById("bedrooms").value;
    var nbBath = document.getElementById("bathrooms").value;
    var test = false;

    for (i = 0; i < listAnnonce.length; i++) {

        if (citeapp == listAnnonce[i].Adress)
        //  && rent1 == listAnnonce[i].rent && type == listAnnonce[i].type && nbBedroom == listAnnonce[i].nbbedrooms && nbBath == listAnnonce[i].nbbathrooms)

        {
            localStorage.setItem('listSearch', JSON.stringify(listAnnonce[i]));
            window.location = "website/properties-left-sidebar";
            test = true;
            break;


        }


    }
}

function displaySearch() {
    var listAnnonce = JSON.parse(localStorage.getItem("annonce"));
    var listSearch = JSON.parse(localStorage.getItem("listSearch"))



}