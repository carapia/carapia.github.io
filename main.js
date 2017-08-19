//navegacão
function inicio() {
    document.getElementById("inicio").style.display = "block";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("contato").style.display = "none";
}

function sobre() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("sobre").style.display = "block";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("contato").style.display = "none";
}

function projetos() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("projetos").style.display = "block";
    document.getElementById("contato").style.display = "none";
}

function contato() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("contato").style.display = "block";
}
