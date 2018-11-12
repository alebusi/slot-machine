function myfunc() {
  var valore = document.myForm.myField.value;
  setInterval(avvisa(), valore*60000);
}

function avvisa() {
  var suona = new Audio('counter.wav');
  suona.play();
}
