function listAnnonce() {
  let annonce = JSON.parse(localStorage.getItem("annonce")) || [];
  // let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  // var contain a html table
  let html = ` <table id="annonce_table">
  <thead>
    <tr>
        <th style="width: 1%">id</th>
        <th style="width: 20%">Annonce Title</th>
        <th style="width: 30%">Type</th>
        <th style="width: 8%" class="text-center">Status</th>
        <th style="width: 20%"></th>
    </tr>
    </thead>`;
  // loop and display the items of localstorage object

  for (let i = 0; i < annonce.length; i++) {
    if (annonce[i].checked === "inProgress") {
      html += `  <tr>
        <td style="width: 1%">${annonce[i].id}</td>
        <td style="width: 20%">${annonce[i].title}</td>
        <td style="width: 30%">${annonce[i].type}</td>
        <td class="project-actions text-right" style="width: 20%">
        <a class="btn btn-success btn-sm"  onclick="activate(${annonce[i].id})">
              <i class="fas fa-check">
              </i>
              Activate
          </a>
          <a class="btn btn-warning btn-sm"  onclick="deny(${annonce[i].id})">
              <i class="fas fa-ban">
              </i>
              Deny
          </a>
          </td>
        <td class="project-actions text-right" style="width: 20%">
          <a class="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#modal-default" onclick="modalDisplay(${annonce[i].id})">
              <i class="fas fa-folder">
              </i>
              View
          </a>
          <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="displayDelete(${annonce[i].id},'${annonce[i].title}')">
              <i class="fas fa-trash">
              </i>
              Delete
          </a>
        </td>
    </tr>
    `;
    }
  }
  // add the rest tag of table
  html += ` </table>`;
  // inject html
  document.getElementById("annonce_table").innerHTML = html;
}

function modalDisplay(id) {
  let annonce = JSON.parse(localStorage.getItem("annonce")) || [];
  for (let i = 0; i < annonce.length; i++) {
    if (id == annonce[i].id) {
      html = `<div class="modal fade" id="modal-default">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${annonce[i].title}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3>Description :</h3><p> ${annonce[i].descr}</p>
          <h3>Address :</h3><p> ${annonce[i].Adress}</p>
          <h3>Periode : </h3><p>${annonce[i].periode}</p>
          <h3>Price : </h3><p>${annonce[i].price}/DT</p>
          <h3>Image : </h3><img src="../website/assets/images/gallery/${annonce[i].gallery}" width="100%"/>
        </div>
        <div class="modal-footer" style="justify-content: center !important;">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
    }
  }
  document.getElementById("modal_annonce").innerHTML = html;
}
function displayDelete(id,title) {
      html = `<div class="modal fade" id="modal-default">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"> remove property ${title}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3>Are you sure you want to remove this property? <br> ${title}</h3>
        </div>
        <div class="modal-footer" style="justify-content: center !important;">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" onClick="removeProperty(${id})">Yes</button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById("modal_annonce").innerHTML = html;
}
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
function activate(id) {
  let annonceList = JSON.parse(localStorage.getItem("annonce")) || [];
  var annonce;
  console.log( id);
  for (i = 0; i < annonceList.length; i++) {
    if (annonceList[i].id == id)
    {
    
      annonceList[i].checked="Activated";}
     
  }
  localStorage.setItem("annonce", JSON.stringify(annonceList));
  location.reload();
}
function deny(id) {
  let annonceList = JSON.parse(localStorage.getItem("annonce")) || [];
  
  for (i = 0; i < annonceList.length; i++) {
    if (annonceList[i].id == id)
    { annonceList[i].checked="Denied";}
     
  }
  localStorage.setItem("annonce", JSON.stringify(annonceList));
  
}

function listAnnonceActivated() {
  let annonce = JSON.parse(localStorage.getItem("annonce")) || [];
  // let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  // var contain a html table
  let html = ` <table id="annonce_table_validate">
  <thead>
    <tr>
        <th style="width: 1%">id</th>
        <th style="width: 20%">Annonce Title</th>
        <th style="width: 30%">Type</th>
        <th style="width: 8%" class="text-center">Status</th>
        <th style="width: 20%"></th>
    </tr>
    </thead>`;
  // loop and display the items of localstorage object

  for (let i = 0; i < annonce.length; i++) {
    if (annonce[i].checked == "Activated") {
     console.log( annonce[i]);
     
      html += `  <tr>
        <td style="width: 1%">${annonce[i].id}</td>
        <td style="width: 20%">${annonce[i].title}</td>
        <td style="width: 30%">${annonce[i].type}</td>
        <td class="project-actions text-right" style="width: 20%">
        
          <a class="btn btn-warning btn-sm" href="#" onclick="deny(${annonce[i].id})">
              <i class="fas fa-ban">
              </i>
              Deny
          </a>
          </td>
        <td class="project-actions text-right" style="width: 20%">
          <a class="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#modal-default" onclick="modalDisplay(${annonce[i].id})">
              <i class="fas fa-folder">
              </i>
              View
          </a>
          <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="displayDelete(${annonce[i].id},'${annonce[i].title}')">
              <i class="fas fa-trash">
              </i>
              Delete
          </a>
        </td>
    </tr>
    `;
    }
  }
  // add the rest tag of table
  html += ` </table>`;
  // inject html
  document.getElementById("annonce_table_validate").innerHTML = html;
}

function listAnnonceDenied() {
  let annonce = JSON.parse(localStorage.getItem("annonce")) || [];
  // let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  // var contain a html table
  let html = ` <table id="annonce_table_denied">
  <thead>
    <tr>
        <th style="width: 1%">id</th>
        <th style="width: 20%">Annonce Title</th>
        <th style="width: 30%">Type</th>
        <th style="width: 8%" class="text-center">Status</th>
        <th style="width: 20%"></th>
    </tr>
    </thead>`;
  // loop and display the items of localstorage object

  for (let i = 0; i < annonce.length; i++) {
    if (annonce[i].checked == "Denied") {
      html += `  <tr>
        <td style="width: 1%">${annonce[i].id}</td>
        <td style="width: 20%">${annonce[i].title}</td>
        <td style="width: 30%">${annonce[i].type}</td>
        <td class="project-actions text-right" style="width: 20%">
        <a class="btn btn-success btn-sm" href="#" onclick="activate(${annonce[i].id})">
              <i class="fas fa-check">
              </i>
              Activate
          </a>
          
          </td>
        <td class="project-actions text-right" style="width: 20%">
          <a class="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#modal-default" onclick="modalDisplay(${annonce[i].id})">
              <i class="fas fa-folder">
              </i>
              View
          </a>
          <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="displayDelete(${annonce[i].id},'${annonce[i].title}')">
              <i class="fas fa-trash">
              </i>
              Delete
          </a>
        </td>
    </tr>
    `;
    }
  }
  // add the rest tag of table
  html += ` </table>`;
  // inject html
  document.getElementById("annonce_table_denied").innerHTML = html;
}
