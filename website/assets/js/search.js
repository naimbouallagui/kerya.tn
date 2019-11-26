function testProperties() {
    var listHouse = JSON.parse(localStorage.getItem("task"))

    var listSearch = {
        // id: Math.floor(Math.random() * 1000 + 1), 
        cite: document.getElementById("cite").value,
        forRent: document.getElementById("forRent").value,
        type: document.getElementById("type").value,
        bedrooms: document.getElementById("bedrooms").value,
        bathrooms: document.getElementById("bathrooms").value,
    }
    for (var i = 0; i < listEdit.length; i++) {
        if ((listSearch.cite[i] == listHouse.cite[i]) && (listSearch.forRent[i] == listHouse.forRent[i]) &&
            (listSearch.type[i] == listHouse.type[i]) && (listSearch.bedrooms[i] == listHouse.bedrooms[i]) &&
            (listSearch.bathrooms[i] == listHouse.bathrooms[i])) {


        }
    }

    listHouse.push(txt);
    localStorage.setItem("task", JSON.stringify(listHouse));
}