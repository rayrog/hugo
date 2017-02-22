$(document).ready(function () {

});

var nbRow = 1; // Initialisation of a number of row to identify question


window.addEventListener("load", loadApplication, false);

function loadApplication() {
  /* ALERT */
  var alert = document.getElementById('alert');
  alert.style.display = "none";
  /* ADD QUESTION*/
  var add = document.getElementById("add_question");
  add.addEventListener("click", newLine, false);

  /* PREVIEW */
  var modal = document.getElementById("myModal");
  var prev = document.getElementById("preview");
  var span = document.getElementsByClassName("close")[0];
  var content = document.getElementById("modal-content");
  var name = document.getElementById('questionnaire_name');

  prev.onclick = function () {
    if (name.value !== '') {
      modal.style.display = "block";
    } else {
      alert.innerHTML = "You must enter a valid name for this questionnaire"
      alert.style.display = "block";
    }
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  prev.addEventListener("click", preview, false);

  /* SAVE */
  var sauve = document.getElementById("sauve");
  sauve.addEventListener("click", save, false);


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
  question_input.innerHTML = "<input type='text' name='question"+nbRow+"' id='question" + nbRow + "' class='form-control' />";
  boutonSupprimer.innerHTML = "<button class='del btn' onClick='deleteRow(" + nbRow + ")'; value='" + nbRow + "'><span class='glyphicon glyphicon-trash'></span> Delete</button><br>";

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
  table.innerHTML = "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>";
  var questionrow = [];
  var question_label = [];
  var question_input = [];
  var question = document.querySelectorAll('[id^=question]');
  var legend = document.getElementById('legend');
  var name = document.getElementById('questionnaire_name');

  legend.innerHTML = name.value;

  for (i = 1; i < question.length; i++) {
    if (question[i].value !== '') {
      questionrow[i] = document.createElement("tr")
      question_label[i] = document.createElement("td");
      question_input[i] = document.createElement("td");

      question_label[i].innerHTML = "<label for='prev_question" + i + "'>" + question[i].value + "</label>";
      question_input[i].innerHTML = "<input type='text' name='prev_question" + i + "' id='prev_question" + i + "' class='form-control' />";
      questionrow[i].appendChild(question_label[i]);
      questionrow[i].appendChild(question_input[i]);
      table.lastChild.appendChild(questionrow[i]);
    }
  }

  var emailrow = document.createElement("tr");
  var email_label = document.createElement("td");
  var email_input = document.createElement("td");
  email_label.innerHTML = "<label for='email_user'>Enter your email :</label>";
  email_input.innerHTML = "<input type='text' id='email_user' class='form-control' required>"
  emailrow.appendChild(email_label);
  emailrow.appendChild(email_input);

  var submitrow = document.createElement("tr");
  var submit_label = document.createElement("td");
  var submit_input = document.createElement("td");
  submit_label.innerHTML = "&nbsp;";
  submit_input.innerHTML = "<input type='text' class='btn submit' value='Submit'>";
  submitrow.appendChild(submit_label);
  submitrow.appendChild(submit_input);
  table.lastChild.appendChild(emailrow);
  table.lastChild.appendChild(submitrow);

}

function save() {
  var $this = $("#form-data");
  var name = $('#questionnaire_name').val();
  var question = document.querySelectorAll("[id^='question']");
  
  for (i = 0; i < question.length; i++) {
    if (question[i].value !== '') {
      $.ajax({
        url: $this.attr('action'), 
        type: $this.attr('method'), 
        data: $this.serialize(), 
        success: function (html) { 
          alert(html); 
        }
      });
    }
  }
  
  //  if (pseudo === '' || mail === '') {
  //    alert('Les champs doivent êtres remplis');
  //  } else {
  //    // Envoi de la requête HTTP en mode asynchrone
  //    $.ajax({
  //      url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
  //      type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
  //      data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
  //      success: function (html) { // Je récupère la réponse du fichier PHP
  //        alert(html); // J'affiche cette réponse
  //      }
  //    });
  //$.post("http://localhost/save.php") //Serveur php
  //$('#save'). //Selectionner le form en jquery et le serializer et le passer en argument a $post et je gere la reponse de la requete dans le callback $.post 
  //  }
}