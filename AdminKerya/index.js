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
    html += `  <tr>
        <td style="width: 1%">${annonce[i].id}</td>
        <td style="width: 20%">${annonce[i].title}</td>
        <td style="width: 30%">${annonce[i].type}</td>
        <td style="width: 8%" class="text-center">${annonce[i].nbbathrooms}</td>
        <td class="project-actions text-right" style="width: 20%">
          <a class="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#modal-default" onclick="modalDisplay(${annonce[i].id})">
              <i class="fas fa-folder">
              </i>
              View
          </a>
          <a class="btn btn-info btn-sm" href="#">
              <i class="fas fa-pencil-alt">
              </i>
              Confirm
          </a>
          <a class="btn btn-danger btn-sm" href="#">
              <i class="fas fa-trash">
              </i>
              Delete
          </a>
        </td>
    </tr>
    `;
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
