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
  var res = confirm("vous etes inscrit, voulez vous vous connecter");
  if (res) location.reload();
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
        listUser[i].isAdmin === "true"
          ? "../Adminkerya/index.html"
          : "./home.html",
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

function fillProperties(loggedUser = null, checked = "Activated") {
  var listAnnonce = JSON.parse(localStorage.getItem("annonce"));
  listAnnonce.forEach(annonce => {
    if (loggedUser === null && annonce.checked === checked) {
      $("#propertiesList").append(
        $(`<div class="property-item col-md-6 col-12 mb-40">
      <div class="property-inner">
          <div class="image">
              <a href="#"><img src="assets/images/gallery/${annonce.gallery}" alt="${annonce.title}" style="height: 200px;"></a>
              <ul class="property-feature">
                  <li>
                      <span class="area"><img src="assets/images/icons/area.png" alt="">${annonce.area} /m2</span>
                  </li>
                  <li>
                      <span class="bed"><img src="assets/images/icons/bed.png" alt="">${annonce.nbbedrooms}</span>
                  </li>
                  <li>
                      <span class="bath"><img src="assets/images/icons/bath.png" alt="">${annonce.nbbathrooms}</span>
                  </li>
              </ul>
          </div>
          <div class="content">
              <div class="left">
                  <h3 class="title"><a href="#">${annonce.title}</a></h3>
                  <span class="location"><img src="assets/images/icons/marker.png" alt="">${annonce.Adress}</span>
              </div>
              <div class="right">
                  <div class="type-wrap">
                      <span class="price">${annonce.price}DT<span>${annonce.periode}</span></span>
                      <span class="type">For Rent</span>
                  </div>
              </div>
          </div>
      </div>
  </div>`)
      );
    }
    if (
      loggedUser &&
      loggedUser.id === annonce.owner &&
      annonce.checked === checked
    ) {
      $("#propertiesList").append(
        $(`<div class="property-item col-md-6 col-12 mb-40">
  <div class="property-inner">
      <div class="image">
          <a href="#"><img src="assets/images/gallery/${annonce.gallery}" alt="${annonce.title}" style="height: 200px;"></a>
          <ul class="property-feature">
              <li>
                  <span class="area"><img src="assets/images/icons/area.png" alt="">${annonce.area} /m2</span>
              </li>
              <li>
                  <span class="bed"><img src="assets/images/icons/bed.png" alt="">${annonce.nbbedrooms}</span>
              </li>
              <li>
                  <span class="bath"><img src="assets/images/icons/bath.png" alt="">${annonce.nbbathrooms}</span>
              </li>
          </ul>
      </div>
      <div class="content">
          <div class="left">
              <h3 class="title"><a href="#">${annonce.title}</a></h3>
              <span class="location"><img src="assets/images/icons/marker.png" alt="">${annonce.Adress}</span>
          </div>
          <div class="right">
              <div class="type-wrap">
                  <span class="price">${annonce.price}DT<span>${annonce.periode}</span></span>
                  <span class="type">For Rent</span>
              </div>
          </div>
          <div class="left" style="margin-top: 10px;">
                <div class="type-wrap">
                    <a href="edit.html?id=${annonce.id}" class="btn btn-edit">Edit</a>
                    <button class="btn btn-delete" data-toggle="modal" data-target="#modal-default" onclick="displayDelete(${annonce.id},'${annonce.title}')">Delete</button>
                </div>
          </div>
      </div>
  </div>
</div>`)
      );
    }
  });
}

function displayDelete(id,title) {
    html = `<div class="modal fade" id="modal-default">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title"> Remove Property ${title}</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>Are you sure you want to remove this property?</h4>
        <h3>${title}</h3>
      </div>
      <div class="modal-footer" style="justify-content: center !important;">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick="removeProperty(${id})">Yes</button>
      </div>
    </div>
  </div>
</div>`;
document.getElementById("modal_properties_delete").innerHTML = html;
}
// delete button on modal
function removeProperty(id) {
let listAd = JSON.parse(localStorage.getItem("annonce")) || [];
// const index = listAd.findIndex(function (item) {
//   return item.id == id;
// })
// listAd.splice(index, 1)
// filter method
const newListAd = listAd.filter(function (item) {
  return item.id !== id;
})

localStorage.setItem('annonce', JSON.stringify(newListAd))
location.reload()
}
function displaySearchPropreties() {
  var list = JSON.parse(localStorage.getItem("listSearch"));
  list
    .filter(e => e.statut !== "accepted")
    .forEach(listSearch => {
      $("#listsearch").append(
        $(`<div class="property-item col-md-6 col-12 mb-40">
    <div class="property-inner">
        <div class="image">
            <a onclick="displayReservation(${listSearch.id})"><img src="assets/images/gallery/${listSearch.gallery}" alt="${listSearch.title}" style="height: 200px;"></a>
            <ul class="property-feature">
                <li>
                    <span class="area"><img src="assets/images/icons/area.png" alt="">${listSearch.area} /m2</span>
                </li>
                <li>
                    <span class="bed"><img src="assets/images/icons/bed.png" alt="">${listSearch.nbbedrooms}</span>
                </li>
                <li>
                    <span class="bath"><img src="assets/images/icons/bath.png" alt="">${listSearch.nbbathrooms}</span>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="left">
                <h3 class="title"><a href="#">${listSearch.title}</a></h3>
                <span class="location"><img src="assets/images/icons/marker.png" alt="">${listSearch.Adress}</span>
            </div>
            <div class="right">
                <div class="type-wrap">
                    <span class="price">${listSearch.price} DT<span>${listSearch.periode}</span></span>
                    <span class="type">For Rent</span>
                </div>
            </div>
        </div>
    </div>
</div>`)
      );
      return true;
    });
}

function bookingsListUser() {
  var reservationdate = JSON.parse(localStorage.getItem("reservationdate"));
  let annonce = JSON.parse(localStorage.getItem("annonce"));
  var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  // var list = JSON.parse(localStorage.getItem("listSearch"));

  var html = ``;

  for (let i = 0; i < annonce.length; i++) {
    for (let j = 0; j < reservationdate.length; j++) {
      if (annonce[i].id == reservationdate[j].idannonce) {
        annonce[i]["Reserved"] = true;
        annonce[i]["booker"] = reservationdate[j].loggedUserId;
      }
    }

    // console.log((annonce[i]['Reserved']), annonce[i]['booker'], loggedUser.id);

    if (annonce[i]["Reserved"] && annonce[i]["booker"] == loggedUser.id) {
      // console.log((annonce[i]['Reserved']));
      html += ` <div class="row" id="bookingList">
            <div class="property-item col-md-6 col-12 mb-40">
            <div class="property-inner">
                <div class="image">
                
                    <a href="#"><img src="assets/images/gallery/${annonce[i].gallery}" alt="${annonce[i].title}" style="height: 200px;"></a>
                    <ul class="property-feature">
                        <li>
                            <span class="area"><img src="assets/images/icons/area.png" alt="">${annonce[i].area} /m2</span>
                        </li>
                        <li>
                            <span class="bed"><img src="assets/images/icons/bed.png" alt="">${annonce[i].nbbedrooms}</span>
                        </li>
                        <li>
                            <span class="bath"><img src="assets/images/icons/bath.png" alt="">${annonce[i].nbbathrooms}</span>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <div class="left">
                        <h3 class="title"><a href="#">${annonce[i].title}</a></h3>
                        <span class="location"><img src="assets/images/icons/marker.png" alt="">${annonce[i].Adress}</span>
                    </div>
                    <div class="right">
                        <div class="type-wrap">
                            <span class="price">${annonce[i].price}DT<span>${annonce[i].periode}</span></span>
                            <span class="type">For Rent</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>`;
    }
  }
  // console.log(annonce);

  document.getElementById("bookingList").innerHTML = html;
}

function confirmListAnn() {
  var reservationdate = JSON.parse(localStorage.getItem("reservationdate"));
  let annonce = JSON.parse(localStorage.getItem("annonce"));
  var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  // var list = JSON.parse(localStorage.getItem("listSearch"));

  var html = ``;

  for (let i = 0; i < annonce.length; i++) {
    for (let j = 0; j < reservationdate.length; j++) {
      if (
        reservationdate[j].idannonce == annonce[i].id &&
        annonce[i].owner == loggedUser.id
      ) {
        //console.log(x);
        // console.log(reservationdate[j]);
        // console.log(annonce[i]);
        html += ` 
                <div class="row" id="confirmList">
                    <div class="property-item col-md-6 col-12 mb-40">
                        <div class="property-inner">
                            <div class="image">
                                <a href="#"><img src="assets/images/gallery/${annonce[i].gallery}" alt="${annonce[i].title}" style="height: 200px;"></a>
                                <ul class="property-feature">
                                    <li>
                                        <span class="area"><img src="assets/images/icons/area.png" alt="">${annonce[i].area} /m2</span>
                                    </li>
                                    <li>
                                        <span class="bed"><img src="assets/images/icons/bed.png" alt="">${annonce[i].nbbedrooms}</span>
                                    </li>
                                    <li>
                                        <span class="bath"><img src="assets/images/icons/bath.png" alt="">${annonce[i].nbbathrooms}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="content">
                                <div class="left">
                                    <h3 class="title"><a href="#">${annonce[i].title}</a></h3>
                                    <span class="location"><img src="assets/images/icons/marker.png" alt="">${annonce[i].Adress}</span>
                                </div>
                                <div class="right">
                                    <div class="type-wrap">
                                        <span class="price">${annonce[i].price}DT<span>${annonce[i].periode}</span></span>
                                        <span class="type">For Rent</span>
                                    </div>
                                </div>
                                <div class="left" style="margin-top: 10px;">
                                    <div class="type-wrap">
                                        ${annonce[i].statut!='accepted'?`<button class="btn" onclick="acceptReservation(${annonce[i].id},${reservationdate[j].id})">Accept</button>`:''}
                                        <a class="m-2 text-danger" onclick="refuseReservation(${annonce[i].id},${reservationdate[j].id})">Deny</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
      }
    }
  }
  document.getElementById("confirmList").innerHTML = html;
}

function acceptReservation(annonceId, reservationId) {
  const allAds = JSON.parse(localStorage.annonce);
  const newList = allAds.map(ad => {
    if (ad.id == annonceId) {
      let newAd = ad;
      newAd.statut = "accepted";
      return newAd;
    }
    return ad;
  });
  localStorage.setItem('annonce', JSON.stringify(newList))
  alert('accepted successfully')
  location.reload()
}
function refuseReservation(annonceId, reservationId) {
  const allAds = JSON.parse(localStorage.annonce);
  const newList = allAds.map(ad => {
    if (ad.id == annonceId) {
      let newAd = ad;
      newAd.statut = "inProgress";
      return newAd;
    }
    return ad;
  });
  localStorage.setItem('annonce', JSON.stringify(newList))

  const allReserv = JSON.parse(localStorage.reservationdate);
  const newReserv = allReserv.filter(ad => {
    return (ad.id != reservationId) 
  });
  localStorage.setItem('reservationdate', JSON.stringify(newReserv))
  alert('refused successfully')
  location.reload()
}

function displayReservation(id) {
  localStorage.setItem("reservationDetail", id);
  // if (!loggedUser) {
  //     location.href = 'gallery.html'
  // } else {
  location.href = "galleryc.html";
}

function reservationDisplay() {
  var list = JSON.parse(localStorage.getItem("listSearch"));
  let html = ``;
  let id = Number(localStorage.getItem("reservationDetail"));
  console.log(id, "id");
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      html += `<div class = "property-inner" id="res">
                        <div class="head">
                        <div class="left">
                            <h1 class="title">${list[i].title}dsfsdf</h1>
                            <span class="location"><img src="assets/images/gallery/${list[i].gallery}" alt=""></span>
                        </div>
                        <div class="right">
                            <div class="type-wrap">
                                <span class="price">${list[i].price}<span>Month</span></span>
                                <span class="type">${list[i].rent}</span>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <h3>Address</h3>

                        <p>${list[i].Adress}</p>
                        <h3>Description</h3>
                        <p>${list[i].descr}</p>
                        <div class="row mt-30 mb-30">

                            <div class="col-md-5 col-12 mb-xs-30">
                                <h3>Condition</h3>
                                <ul class="feature-list">
                                    <li>
                                        <div class="image"><img src="assets/images/icons/area.png" alt=""></div>Area : ${list[i].area}</li>
                                    <li>
                                        <div class="image"><img src="assets/images/icons/bed.png" alt=""></div>Bedroom : ${list[i].nbbedrooms}</li>
                                    <li>
                                        <div class="image"><img src="assets/images/icons/bath.png" alt=""></div>Bathroom : ${list[i].nbbathrooms}</li>                               
                                </ul>
                            </div>
                            <div class="col-md-7 col-12">
                                <h3>Amenities</h3>
                                <ul class="amenities-list">
                                    <li>Air Conditioning</li>
                                    <li>Balcony</li>
                                    <li>Cable TV</li>
                                    <li>Internet</li>
                                    <li>Parking</li>
                                </ul>
                            </div>
                        </div>                
                        `;
    }
  }
  document.getElementById("res").innerHTML = html;
}

function reservationDate() {
  var id = Number(localStorage.getItem("reservationDetail"));

  var list = JSON.parse(localStorage.getItem("userList"));
  var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  var reservationlist = JSON.parse(localStorage.getItem("reservationdate"));
  if (reservationlist == null) {
    reservationlist = [];
  }
  var userObj = {
    idReservation: Math.floor(Math.random() * 1000 + 1),
    datestart: document.getElementById("startdate").value,
    dateend: document.getElementById("enddate").value,
    idannonce: id,
    statut: "inProgress",
    loggedUserId: loggedUser.id
  };
  reservationlist.push(userObj);
  localStorage.setItem("reservationdate", JSON.stringify(reservationlist));
}
function hasReservation(user, annonceId) {
  const allReservations = JSON.parse(localStorage.getItem("reservationdate"));
  const findReservation = (allReservations || []).find(
    e => e.idannonce == annonceId && e.loggedUserId == user.id
  );
  if (findReservation === undefined) return false;
  return true;
}
function reserveAd() {
  const loggedUser = JSON.parse(localStorage.loggedUser);
  var id = Number(localStorage.getItem("reservationDetail"));
  const datesAreValid = validDates();
  if (!datesAreValid) {
    alert("Dates are not valid");
    return;
  }
  const isAlreadyReserved = hasReservation(loggedUser, id);
  if (isAlreadyReserved) {
    alert("you have already reserved this advert");
    return;
  }

  var list = JSON.parse(localStorage.getItem("userList"));
  var reservationlist = JSON.parse(localStorage.getItem("reservationdate"));
  if (reservationlist == null) {
    reservationlist = [];
  }
  var userObj = {
    idReservation: Math.floor(Math.random() * 1000 + 1),
    datestart: document.getElementById("startdate").value,
    dateend: document.getElementById("enddate").value,
    idannonce: id,
    statut: "inProgress",
    loggedUserId: loggedUser.id
  };
  reservationlist.push(userObj);
  localStorage.setItem("reservationdate", JSON.stringify(reservationlist));
  alert("reserved successfully");
}

function testReservation() {
  var startDate1 = document.getElementById("startdate").value;
  var endDate1 = document.getElementById("enddate").value;
  let reservationdate = JSON.parse(localStorage.getItem("reservationdate"));
  let annonce = JSON.parse(localStorage.getItem("annonce"));

  var today = new Date();
  var dayStart = parseInt(startDate1.substr(8, 2));
  var dayEnd = parseInt(endDate1.substr(8, 2));
  if (today.getDate() < dayStart && dayEnd > dayStart) {
    console.log("mrigl");
    alert("reserved successfully");
    return;
  }
  console.log("no");
  alert("fix the date");
}

function validDates() {
  var startDate1 = document.getElementById("startdate").value;
  var endDate1 = document.getElementById("enddate").value;
  let reservationdate = JSON.parse(localStorage.getItem("reservationdate"));
  let annonce = JSON.parse(localStorage.getItem("annonce"));

  var today = new Date();
  var dayStart = new Date(startDate1);
  var dayEnd = new Date(endDate1);
  if (today < dayStart && dayEnd > dayStart) {
    return true;
  }
  return false;
}
// for (let j = 0; j < annonce.length; j++) {
//     for (let i = 0; i < reservationdate.length; i++) {

//         if (reservationdate[i].idannonce == annonce[j].id) {
//             annonce[i]['Reserved'] = true;
//             console.log(annonce[j]['Reserved'], reservationdate[i].idannonce, annonce[j].id)
//             console.log(annonce[j])
//         }

//     }
// if (annonce[j]['Reserved']) {

// }
// } else

function fillProfile() {
  // const loggedUser = JSON.parse(localStorage.loggedUser)
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  let index = loggedUser.id;
  //$('#f_name').val(loggedUser.firstname) //input or select
  //$('#l_name').val(loggedUser.lastname) //input or select
  //$('#personal_number').val(loggedUser.number) //input or select
  //$('#personal_email').val(loggedUser.email) //input or select
  //$('#username').val(loggedUser.username) //input or select
  //$('#personal_address').val(loggedUser.adress) //input or select
  //$('#personal_password').val(loggedUser.password) //input or select
  //$('#personal_address').html(loggedUser.adress)// textzreza
  //$('#username').html(loggedUser.username)// textzreza
  document.getElementById("f_name").value = loggedUser.firstname;
  document.getElementById("l_name").value = loggedUser.lastname;
  document.getElementById("personal_number").value = loggedUser.number;
  document.getElementById("personal_email").value = loggedUser.email;
  document.getElementById("username").value = loggedUser.username;
  document.getElementById("personal_address").value = loggedUser.adress;
  document.getElementById("personal_password").value = loggedUser.password;

  //   loggedUser[index].firstname = document.getElementById("f_name").value;
  //   loggedUser[index].lastname = document.getElementById("l_name").value;
  //   loggedUser[index].number = document.getElementById("personal_number").value;
  //   loggedUser[index].email = document.getElementById("personal_email").value;
  //   loggedUser[index].username = document.getElementById("username").value;
  //   loggedUser[index].adress = document.getElementById("personal_address").value;
  //   loggedUser[index].password = document.getElementById("personal_password").value;

  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  //   displayTask();
}

function fillCarousel() {
  let listCarousel = JSON.parse(localStorage.annonce);
  let html = "";
  for (let i = 0; i < listCarousel.length; i++) {
    const element = listCarousel[i];
    if (element.checked === "Activated") {
      html += `<div class="property-item col">
            <div class="property-inner">
                <div class="image">
                    <a href="#"><img src="assets/images/gallery/${element.gallery}" alt=""></a>
                    <ul class="property-feature">
                        <li>
                            <span class="area"><img src="assets/images/icons/area.png" alt="">${element.area}/m2</span>
                        </li>
                        <li>
                            <span class="bed"><img src="assets/images/icons/bed.png" alt="">${element.nbbedrooms}</span>
                        </li>
                        <li>
                            <span class="bath"><img src="assets/images/icons/bath.png" alt="">${element.nbbathrooms}</span>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <div class="left">
                        <h3 class="title"><a href="#">${element.title}</a></h3>
                        <span class="location"><img src="assets/images/icons/marker.png" alt="">${element.Adress}</span>
                    </div>
                    <div class="right">
                        <div class="type-wrap">
                            <span class="price">${element.price}<span>${element.periode}</span></span>
                            <span class="type">${element.rent}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
  }
  document.getElementById("carousel-property").innerHTML = html;
}
