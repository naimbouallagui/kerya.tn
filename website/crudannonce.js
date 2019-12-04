var gallery = []

function addImage(file) {
    //   debugger;
    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onload = function() {

        console.log(reader.result);
        gallery.push(reader.result)
        $('#gallery').append($('<img src="' + reader.result + '"/>'))
    };
    reader.onerror = error => console.log(error);
}

function propertyTitle() {
    var propertyTitle = document.getElementById("property_title").value;

    if (propertyTitle.length < 5) {
        return false;
    }
    return true;
}

function adressTest() {
    var adressTest = document.getElementById("property_address").value;

    if (adressTest.length < 15) {
        return false;
    }
    return true;
}

// function priceTest(){
//     var priceTest = document.getElementById("price").value;
//     var regex = /^[0-9]g/;

//   for (let i = 0; i < priceTest.length; i++) {

//     if (regex.test = priceTest[i]) {
//         console.log("nope")
//       return false;
//     }
//     return true;

//   }
// }

function description() {
    var description = document.getElementById("property_description").value;

    if (adressTest.length < 25) {
        return false;
    }
    return true;
}

function addAnnonce() {
    // book a space on localstorage as a list
    let listAnnonce = JSON.parse(localStorage.getItem("annonce"));

    if (listAnnonce == null) {
        listAnnonce = [];
    }
    console.log(listAnnonce);
    // if (propertyTitle() && adressTest() && description()) {

    // structure of object to add in localstorage
    var Annonce = {
        id: Math.floor(Math.random() * 1000 + 1),
        title: document.getElementById("property_title").value,
        Adress: document.getElementById("cite").value,
        rent: document.getElementById("rentinput").value,
        periode: document.getElementById("rentalPeriod").value,
        descr: document.getElementById("property_description").value,
        type: document.getElementById("typeMaison").value,
        price: document.getElementById("price").value,
        nbbedrooms: document.getElementById("nbbedrooms").value,
        nbbathrooms: document.getElementById("nbbathrooms").value,
        features: {
            airc: document.getElementById("air_condition").checked
        },
        gallery: document.getElementById('image').files[0].name,
        checked:  'inProgress'
    };
    // push the structure and setitem as a string

    listAnnonce.push(Annonce);
    localStorage.setItem("annonce", JSON.stringify(listAnnonce));
    window.location = "./add.html";

    console.log(localStorage.getItem("annonce"));
}


function searchAnnC() {
    var listAnnonce = JSON.parse(localStorage.getItem("annonce"));
    var citeapp = document.getElementById("cite").value;
    var rent1 = document.getElementById("rent").value;
    var type = document.getElementById("typeann").value;
    var nbBedroom = document.getElementById("bedrooms").value;
    var nbBath = document.getElementById("bathrooms").value;
    var test = false;
    let result = []
    var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    for (i = 0; i < listAnnonce.length; i++) {
        if ((citeapp === listAnnonce[i].Adress) &&
            (type === listAnnonce[i].type)) {
            // && nbBedroom == listAnnonce[i].nbbedrooms && nbBath == listAnnonce[i].nbbathrooms)
            result.push(listAnnonce[i]);
        }
    }
    // debugger : test sur chaque ligne 
    if (!loggedUser) {
        localStorage.setItem("listSearch", JSON.stringify(result));
        window.location = "../website/properties.html";
    } else {
        localStorage.setItem("listSearch", JSON.stringify(result));
        window.location = "../website/propertiesc.html";

    }
    test = true;
}


function editProfile() {
    let listEdit = JSON.parse(localStorage.getItem("userList")) || [];

    for (let i = 0; i < listEdit.length; i++) {
        if (listEdit[i] == i) {
            document.getElementById("f_name").value = listEdit[i].firstname;
            document.getElementById("l_name").value = listEdit[i].lastname;
            document.getElementById("personal_address").value = listEdit[i].adress;
            document.getElementById("personal_number").value = listEdit[i].number;
            document.getElementById("personal_email").value = listEdit[i].email;
            document.getElementById("id").value = i;

            break;
        }
    }
}