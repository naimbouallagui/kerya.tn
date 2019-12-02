function init() {
    // 1: creation compte admin / create admin function()
    // 2: creation compte client / create client function()
    // 3: creation annonce / create annonce function()
}

/**
 * firstName test
 */
function firstName() {
    var firstName = document.getElementById("firstname").value;
    if (firstName.length == 0) {
        return false;
    }
    return true;
}

/**
 * lastName test
 */
function lastName() {
    var lastName = document.getElementById("lastname").value;
    if (lastName.length == 0) {
        return false;
    }
    return true;
}

function isMailConfirmed() {
    var mailValue = document.getElementById("mail").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mailValue.length <= 0) {
        return false;
    } else if (regex.test(mailValue)) {
        return true;
    }
    return false;
}

/**
 * validNumber test
 */
function validNumber() {
    var phoneNumber = document.getElementById("number").value;
    var number = /[0-9]/g;
    var result = number.test(phoneNumber);

    if (phoneNumber.length <= 0) {
        return false;
    } else if (result && phoneNumber.length == 8) {
        return true;
    }
    return false;
}

/**
 * userName test
 */
function userName() {
    var userName = document.getElementById("username").value;
    if (userName.indexOf(" ") > -1 || userName.length == 0) {
        return false;
    }
    return true;
}

/**
 * majTest test
 */
function majTest() {
    var pass = document.getElementById("psw").value;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] == pass[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}

/**
 * carTest test
 */
function carTest() {
    var regex = "#!*%-+/";
    var pass = document.getElementById("psw").value;
    for (i = 0; i < pass.length; i++) {
        if (regex.indexOf(pass[i]) > 0) {
            return true;
        }
    }
    return false;
}

/**
 * passwordTest test
 */
function passwordTest() {
    let count = 0;
    var pass = document.getElementById("psw").value;

    if (pass.length < 8) {
        // count = 0
        return false;
    } else {
        count++;
        // count = 1
        if (majTest()) {
            count++;
            // count = 2
        }

        if (carTest()) {
            count++;
            // count = 3
        }
    }

    if (count == 1) {
        //   console.log("faible");
        return true;
    }
    if (count == 2) {
        //   console.log("moy");
        return true;
    }
    if (count == 3) {
        //   console.log("fort");
        return true;
    }
}

/**
 * conPass test
 */
function confirmPassword() {
    var pass = document.getElementById("psw").value;
    var confPass = document.getElementById("paswc").value;
    if (pass == confPass) {
        //   console.log("confirmed");
        return true;
    }
    // console.log("not confirmed");
    return false;
}

/**
 * register test
 */
function register() {
    let listUser = JSON.parse(localStorage.getItem("userList"));
    if (listUser == null) {
        listUser = [];
    }

    if (
        firstName() &&
        lastName() &&
        isMailConfirmed() &&
        validNumber() &&
        userName() &&
        passwordTest() &&
        confirmPassword()
    ) {
        var userObj = {
            id: Math.floor(Math.random() * 1000 + 1),
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("mail").value,
            number: document.getElementById("number").value,
            adress: document.getElementById("adress").value,
            username: document.getElementById("username").value,
            password: document.getElementById("psw").value,
            confirmPass: document.getElementById("paswc").value,
            isAdmin: false
        };
        // let admin = {
        //   username : 'admin',
        //   password : 'admin',
        //   isAdmin: true
        // }
        listUser.push(userObj);
        localStorage.setItem("userList", JSON.stringify(listUser));
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("number").value = "";
        document.getElementById("adress").value = "";
        document.getElementById("username").value = "";
        document.getElementById("psw").value = "";
        document.getElementById("paswc").value = "";
    }
    var res = confirm('vous etes inscrit, voulez vous vous connecter')
    if (res) location.reload()
}

/**
 * login test
 */
function logIn(e) {
    e.preventDefault();
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    let listUser = JSON.parse(localStorage.getItem("userList"));

    for (i = 0; i < listUser.length; i++) {
        if (listUser[i].username === login && listUser[i].password === password) {
            localStorage.setItem("loggedUser", JSON.stringify(listUser[i]));
            window.open(
                listUser[i].isAdmin == true ?
                "../Adminkerya/index.html" :
                "./home.html",
                "_self"
            );
            break;
        }
    }
}

/***
 *  checkLogin test
 */

function checkLogin() {
    const loggedUser = localStorage.getItem("loggedUser");

    if (!loggedUser) {
        //loggedUser == undefined
        window.location = "../website/login-register.html";
    }
}

/***
 *  logOut test
 */

function logOut() {
    localStorage.removeItem("loggedUser");
    document.location = "../website/index.html";
}

function fillProperties() {
    var listAnnonce = JSON.parse(localStorage.getItem('annonce'))
    listAnnonce.forEach((annonce) => {
        $('#propertiesList').append($(`<div class="property-item col-md-6 col-12 mb-40">
      <div class="property-inner">
          <div class="image">
              <a href="single-properties.html"><img src="${annonce.gallery[0]}" alt="${annonce.title}" style="height: 200px;"></a>
              <ul class="property-feature">
                  <li>
                      <span class="area"><img src="assets/images/icons/area.png" alt="">${annonce.price} Dt</span>
                  </li>
                  <li>
                      <span class="bed"><img src="assets/images/icons/bed.png" alt="">6</span>
                  </li>
                  <li>
                      <span class="bath"><img src="assets/images/icons/bath.png" alt="">4</span>
                  </li>
                  <li>
                      <span class="parking"><img src="assets/images/icons/parking.png" alt="">3</span>
                  </li>
              </ul>
          </div>
          <div class="content">
              <div class="left">
                  <h3 class="title"><a href="single-properties.html">${annonce.title}</a></h3>
                  <span class="location"><img src="assets/images/icons/marker.png" alt="">${annonce.adress}</span>
              </div>
              <div class="right">
                  <div class="type-wrap">
                      <span class="price">${annonce.price}<span>M</span></span>
                      <span class="type">For Rent</span>
                  </div>
              </div>
          </div>
      </div>
  </div>`))

        return true
    })

}

function displaySearchPropreties() {
    var list = JSON.parse(localStorage.getItem("listSearch"));
    list.forEach((listSearch) => {
        $('#listsearch').append($(`<div class="property-item col-md-6 col-12 mb-40">
      <div class="property-inner">
          <div class="image">
              <a href="single-properties.html"><img src="${listSearch.gallery[0]}" alt="${listSearch.title}" style="height: 200px;"></a>
              <ul class="property-feature">
                  <li>
                      <span class="area"><img src="assets/images/icons/area.png" alt="">${listSearch.price} Dt</span>
                  </li>
                  <li>
                      <span class="bed"><img src="assets/images/icons/bed.png" alt="">6</span>
                  </li>
                  <li>
                      <span class="bath"><img src="assets/images/icons/bath.png" alt="">4</span>
                  </li>
                  <li>
                      <span class="parking"><img src="assets/images/icons/parking.png" alt="">3</span>
                  </li>
              </ul>
          </div>
          <div class="content">
              <div class="left">
                  <h3 class="title"><a href="single-properties.html">${listSearch.title}</a></h3>
                  <span class="location"><img src="assets/images/icons/marker.png" alt="">${listSearch.adress}</span>
              </div>
              <div class="right">
                  <div class="type-wrap">
                      <span class="price">${listSearch.price}<span>M</span></span>
                      <span class="type">For Rent</span>
                  </div>
              </div>
          </div>
      </div>
  </div>`))

        return true
    })

}





function fillProfile() {
    const loggedUser = JSON.parse(localStorage.loggedUser)
    $('#f_name').val(loggedUser.firstname) //input or select
    $('#l_name').val(loggedUser.lastname) //input or select
    $('#personal_number').val(loggedUser.number) //input or select
    $('#personal_email').val(loggedUser.email) //input or select
    $('#username').val(loggedUser.username) //input or select
    $('#personal_address').val(loggedUser.adress) //input or select
    $('#personal_password').val(loggedUser.password) //input or select
        //$('#personal_address').html(loggedUser.adress)// textzreza
        //$('#username').html(loggedUser.username)// textzreza

}