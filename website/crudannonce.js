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
            airc: document.getElementById("air_condition").checked,
            bed: document.getElementById("bedding").checked,
            cabletv: document.getElementById("cable_tv").checked,
            internet: document.getElementById("internet").checked
        },
        area: document.getElementById('property_area').value,
        gallery: document.getElementById('image').files[0].name,
        checked: 'inProgress',
        owner: JSON.parse(localStorage.loggedUser).id
    };
    // push the structure and setitem as a string

    listAnnonce.push(Annonce);
    localStorage.setItem("annonce", JSON.stringify(listAnnonce));
    window.location = "./add.html";

    console.log(localStorage.getItem("annonce"));
}

function searchAnnC() {
    search();
    displaySearchPropreties();
    

}

function search() {
    var listAnnonce = JSON.parse(localStorage.getItem("annonce"));
    
    // var citeapp = document.getElementById("cite").value.replace('select','');
    // var title = document.getElementById("title").value;
    // var rent1 = document.getElementById("rent").value.replace('select','');
    // var type = document.getElementById("typeann").value.replace('select','');
    // var nbBedroom = document.getElementById("bedrooms").value.replace('select','');
    // var nbBath = document.getElementById("bathrooms").value.replace('select','');

    var urlParams = new URLSearchParams(window.location.search)

    const citeapp = urlParams.get("city");
    const title = urlParams.get("title");
    const rent1 = urlParams.get("type");
    const type = urlParams.get("category");
    const nbBedroom = urlParams.get("beds");
    const nbBath = urlParams.get("baths");

    var test = false;
    let result = listAnnonce
    var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if(citeapp){
        result=filterByAttribute(result,'Adress',citeapp)
    }
    if(title){
        result=result.filter(function(item) {
            return item.title.indexOf(title)>-1
        })
    }
    if(rent1){
        result=filterByAttribute(result,'rent',rent1)
    }
    if(type){
        result=filterByAttribute(result,'type',type)
    }
    if(nbBedroom){
        result=filterByAttribute(result,'nbbedrooms',nbBedroom)
    }
    if(nbBath){
        result=filterByAttribute(result,'nbbathrooms',nbBath)
    }
    // if (!loggedUser) {
    //     localStorage.setItem("listSearch", JSON.stringify(result));
    //     window.location = "../website/properties.html";
    // } else {
    //     localStorage.setItem("listSearch", JSON.stringify(result));
    //     window.location = "../website/propertiesc.html";
    // }
    test = true;
    return result
}

/**
 * this function filters an array of objects by an object key
 *
 * @param {*} [list=[]]
 * @param {string} [attribute='']
 * @param {string} [query='']
 * @returns
 */
function filterByAttribute(list=[],attribute='',query='') {

    // ES6 return list.filter(e=>e[attribute]==query)
   
    // ES5 return list.filter(function (element) {
    //     return element[attribute]==query
    // })

    // ES5 WITHOUT FILTER FUNCTION
    var aux=[]
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if(element[attribute]==query) aux.push(element);
    }
    return aux;
}


// function editProfile() {
//     let listEdit = JSON.parse(localStorage.getItem("userList")) || [];

//     for (let i = 0; i < listEdit.length; i++) {
//         if (listEdit[i] == i) {
//             document.getElementById("f_name").value = listEdit[i].firstname;
//             document.getElementById("l_name").value = listEdit[i].lastname;
//             document.getElementById("personal_address").value = listEdit[i].adress;
//             document.getElementById("personal_number").value = listEdit[i].number;
//             document.getElementById("personal_email").value = listEdit[i].email;

//             break;
//         }
//     }
// }

function fillAnnonce(id) {
    let annonceList = JSON.parse(localStorage.annonce);
    const annonce = annonceList.find(function (element) {
        return element.id == id;
    })
    document.getElementById("property_title").value = annonce.title;
    document.getElementById("cite").value = annonce.Adress;
    document.getElementById("rentinput").value = annonce.rent;
    document.getElementById("rentalPeriod").value = annonce.periode;
    document.getElementById("property_area").value = annonce.area;
    document.getElementById("typeMaison").value = annonce.type;
    document.getElementById("price").value = annonce.price;
    document.getElementById("galleryimg").innerHTML = annonce.gallery;
    document.getElementById("property_description").innerHTML = annonce.descr;
    document.getElementById("nbbedrooms").value = annonce.nbbedrooms;
    document.getElementById("nbbathrooms").value = annonce.nbbathrooms;
    document.getElementById("nbbathrooms").value = annonce.nbbathrooms;
    document.getElementById("air_condition").checked = annonce.features.airc || false;
    document.getElementById("bedding").checked = annonce.features.bed || false;
    document.getElementById("cable_tv").checked = annonce.features.cabletv || false;
    document.getElementById("internet").checked = annonce.features.internet || false;

}

function editAnnonce() {
    var urlParams = new URLSearchParams(window.location.search)

    const id = urlParams.get("id");
    let annonceList = JSON.parse(localStorage.annonce);
    const oldAnnonce = annonceList.find(a=>a.id == id)
    

    if (annonceList == null) {
        annonceList = [];
    }

    // structure of object to add in localstorage
    
        oldAnnonce.title= document.getElementById("property_title").value;
        oldAnnonce.title= document.getElementById("property_area").value;
        oldAnnonce.Adress= document.getElementById("cite").value;
        oldAnnonce.rent= document.getElementById("rentinput").value;
        oldAnnonce.periode= document.getElementById("rentalPeriod").value;
        oldAnnonce.descr= document.getElementById("property_description").value;
        oldAnnonce.type= document.getElementById("typeMaison").value;
        oldAnnonce.price= document.getElementById("price").value;
        oldAnnonce.nbbedrooms= document.getElementById("nbbedrooms").value;
        oldAnnonce.nbbathrooms= document.getElementById("nbbathrooms").value;
        oldAnnonce.features= {
            airc: document.getElementById("air_condition").checked,
            bed: document.getElementById("bedding").checked,
            cabletv: document.getElementById("cable_tv").checked,
            internet: document.getElementById("internet").checked
        };
        oldAnnonce.gallery= document.getElementById('image').files[0]?document.getElementById('image').files[0].name:document.getElementById('galleryimg').innerHTML;
    
    // short arrow function (a=>a.id != id)
    var newListAnnonce = annonceList.filter(a=>a.id != id);
    // var newListAnnonce = annonceList.filter(function (a) {
    //     return a.id != id;
    // });
    // push the structure and setitem as a string
    newListAnnonce.push(oldAnnonce);
    localStorage.setItem("annonce", JSON.stringify(newListAnnonce));
    alert("updated successfuly ");
}


function handleFileSelect() {
    document.getElementById("galleryimg").innerHTML = '';
}

function fillProfile() {
    let loggedUserc = JSON.parse(localStorage.loggedUser);
    
    document.getElementById("f_name").value = loggedUserc.firstname;
    document.getElementById("l_name").value = loggedUserc.lastname;
    document.getElementById("personal_address").value = loggedUserc.adress;
    document.getElementById("personal_number").value = loggedUserc.number;
    document.getElementById("personal_email").value = loggedUserc.email;
    document.getElementById("personal_password").value = loggedUserc.password;
    

}

function editProfile() {
    
    let loggedUserc = JSON.parse(localStorage.loggedUser);
    const newProfile = loggedUserc
    // structure of object to add in localstorage
    
        newProfile.firstname= document.getElementById("f_name").value;
        newProfile.lastname= document.getElementById("l_name").value;
        newProfile.adress= document.getElementById("personal_address").value;
        newProfile.number= document.getElementById("personal_number").value;
        newProfile.email= document.getElementById("personal_email").value;
        newProfile.password= document.getElementById("personal_password").value;
    
    localStorage.setItem("loggedUser", JSON.stringify(newProfile));
    
    /**
     * update users list
     */
    const allUsers=JSON.parse(localStorage.userList)
    const newList=allUsers.map(function(user){
        if(user.id==loggedUserc.id){
            return newProfile
        }
        return user
    })
    localStorage.setItem("userList", JSON.stringify(newList));
     alert("updated successfuly ");
}