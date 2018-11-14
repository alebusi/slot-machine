function myfunc() {
  var valore = document.myForm.myField.value;
  avvisa();
  my_element = document.getElementById("msg");
  my_element.setAttribute("class","on");
  setInterval(avvisa, valore*60000);
}

function avvisa() {
  var suona = new Audio('timer.mp3');
  suona.play();
}
