function myfunc(valore) {
  setInterval(avvisa(), valore);
}

function avvisa() {
  var suona = new Audio('counter.wav');
  suona.play();
}
