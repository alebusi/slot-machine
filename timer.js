var modo=1;
var valoreOpacity=0;

function myfunc() {
  if (modo == 0) {
    modo=1;
    }
  else {
    modo=0;
  }
  var valore = 2000;
  avvisa();
  setInterval(avvisa, valore);
}

function avvisa() {
  /* var suona = new Audio('timer.mp3'); */
  if (document.getElementById("target").className=="bianca") {
    document.getElementById("target").className="nera";
  }
  else {
    document.getElementById("target").className="bianca";
  }
  if (modo == 1) {
    valoreOpacity+=0.2;
    document.getElementById("target").style.opacity = valoreOpacity;
    if (valoreOpacity == 1) {
      valoreOpacity=0;
    }
  }
  /* suona.play(); */
}
