let menuaberto = false;

function menuSobre() {
  if (menuaberto) {
    document.getElementById("sobre").style.display = "none";
    document.getElementById("contato").style.display = "none";
    menuaberto = false;
  } else {
    document.getElementById("sobre").style.display = "inline";
    document.getElementById("contato").style.display = "inline";
    menuaberto = true;
  };
};
