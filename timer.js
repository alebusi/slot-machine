function myfunc() {
  var valore = 2000;
  avvisa();
  setInterval(avvisa, valore);
}

function avvisa() {
  var suona = new Audio('timer.mp3');
  if (document.getElementById("target").className=="bianca") {
    document.getElementById("target").className="nera";
  }
  else {
    document.getElementById("target").className="bianca";
  }
  suona.play();
}
