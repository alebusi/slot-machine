var modo=0;
var valoreOpacity=0;

function myfunc() {
  if (modo >0) {
     clearInterval(myTimer);
  }
  if (modo == 1) {
    modo=2
    valoreOpacity=0;
    }
  else {
    modo=1
    valoreOpacity=1;
    document.getElementById("target").style.opacity = valoreOpacity;
  }
  var valore = 2000;
  avvisa();
  myTimer=setInterval(avvisa, valore);
}

function avvisa() {
  /* var suona = new Audio('timer.mp3'); */
  if (modo == 1) {  
     if (document.getElementById("target").className=="bianca") {
       document.getElementById("target").className="nera";
     }
     else {
       document.getElementById("target").className="bianca";
     }
  }
  if (modo == 2) {
    valoreOpacity+=0.2;
    document.getElementById("target").style.opacity = valoreOpacity;
    if (valoreOpacity == 1) {
      valoreOpacity=0;
    }
  }
  /* suona.play(); */
}
