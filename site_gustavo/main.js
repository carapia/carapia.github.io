//navegacão
var pages = [
  "inicio",
  "sobre",
  "projetos",
  "contato"
];

function hide() {
  for (i in pages) {
    document.getElementById(pages[i]).style.display = "none";
  }
}

function inicio() {
  hide();
  document.getElementById("inicio").style.display = "block";
}

function sobre() {
  hide();
  document.getElementById("sobre").style.display = "block";
}

function projetos() {
  hide();
  document.getElementById("projetos").style.display = "block";
}

function contato() {
  hide();
  document.getElementById("contato").style.display = "block";
}
