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
  
    if (firstName() && lastName() && isMailConfirmed() && validNumber() && userName() && passwordTest() && confirmPassword()) {
      var userObj = {
        id: Math.floor(Math.random() * 1000 + 1),
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("mail").value,
        number: document.getElementById("number").value,
        username: document.getElementById("username").value,
        password: document.getElementById("psw").value,
        confirmPass: document.getElementById("paswc").value,
        isAdmin: false
      }
      // let admin = {
      //   username : 'admin',
      //   password : 'admin',
      //   isAdmin: true
      // }
      listUser.push(userObj);
      localStorage.setItem("userList", JSON.stringify(listUser));
      document.getElementById('firstname').value = ''; 
      document.getElementById('lastname').value = ''; 
      document.getElementById('mail').value = ''; 
      document.getElementById('number').value = ''; 
      document.getElementById('username').value = ''; 
      document.getElementById('psw').value = ''; 
      document.getElementById('paswc').value = ''; 
    }
  }

/**
 * login test
 */
  function logIn() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    let listUser = JSON.parse(localStorage.getItem("userList")); 
    let test = false;
  
    for (i = 0; i < listUser.length; i++) {
      if (login == listUser[i].username && password == listUser[i].password) {
        localStorage.setItem("loggedUser", JSON.stringify(listUser[i])); 
        test = true;
        window.location = "./indexconnected.html";
        break;
      }else if(login == "admin" && password == "admin"){
        window.location = "../Adminkerya/index.html";
        break;
      }
    }
    if (test) {
      console.log("mriguel");
    } else {
      console.log("no");
    }
  }
  