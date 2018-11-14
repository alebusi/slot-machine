function myfunc() {
  var valore = document.myForm.myField.value;
  avvisa();
  document.getElementById("msg").className="on";
  setInterval(avvisa, valore*60000);
}

function avvisa() {
  var suona = new Audio('timer.mp3');
  suona.play();
}
