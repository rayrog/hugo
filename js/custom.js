$(document).ready(function () {

});

var nbRow = 1; // Initialisation of a number of row to identify question

window.addEventListener("load", loadApplication, false);

function loadApplication() {
  /* ADD QUESTION*/
  var add = document.getElementById("add_question");
  add.addEventListener("click", newLine, false);

  /* PREVIEW */
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("preview");
  var span = document.getElementsByClassName("close")[0];
  var content = document.getElementById("modal-content");
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  var prev = document.getElementById("preview");
  prev.addEventListener("click", preview, false);

  /* SAVE */

  var save = document.getElementById("save");
  save.addEventListener("click", save, false);
}

function newLine() {

  nbRow = nbRow + 1;
  var table = document.getElementById("create_questionnaire");
  var row = document.createElement("tr");
  var question_label = document.createElement("td");
  var question_input = document.createElement("td");
  var boutonSupprimer = document.createElement("td");

  /*Création des éléments dans les cellules du tableau*/
  row.setAttribute("id", "row" + nbRow);
  question_label.innerHTML = "<label for='question" + nbRow + "'>Question :</label>";
  question_input.innerHTML = "<input type='text' name='question' id='question" + nbRow + "' class='form-control' />";
  boutonSupprimer.innerHTML = "<button class='del btn' onClick='deleteRow(" + nbRow + ")'; value='" + nbRow + "'>Delete</button><br>";

  row.appendChild(question_label);
  row.appendChild(question_input);
  row.appendChild(boutonSupprimer);
  table.lastChild.appendChild(row);
  return nbRow;
}

function deleteRow(nbRow) {
  var row = document.getElementById("row" + nbRow);
  row.parentNode.removeChild(row);
  nbRow = nbRow - 1;
  return nbRow;
}

function preview() {
  var table = document.getElementById("table_preview");
  var row = [];
  var question_label = [];
  var question_input = [];
  var question = document.querySelectorAll('[id^=question]');


  for (i = 0; i < question.length; i++) {
    if (question[i].value !== '') {
      row[i] = document.createElement("tr")
      question_label[i] = document.createElement("td");
      question_input[i] = document.createElement("td");

      question_label[i].innerHTML = "<label for='prev_question" + i + "'>" + question[i].value + "</label>";
      question_input[i].innerHTML = "<input type='text' name='prev_question" + i + "' id='prev_question" + i + "' class='form-control' />";
      row[i].appendChild(question_label[i]);
      row[i].appendChild(question_input[i]);
      table.lastChild.appendChild(row[i]);
    }
  }
}

function save(){
  
}