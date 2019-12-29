var lettersC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var timerAttivo = "N";

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function scriviLetteraTimer() {
  if (timerAttivo == "N") {
    scriviLettera();
    myTimer=setInterval(scriviLettera, 5000);
    timerAttivo="S";
  }
  else {
    clearInterval(myTimer);
    timerAttivo="N";
  }
}

function scriviLettera() {
  document.getElementById("lettera").innerHTML = lettersC[(randomIntFromInterval(0,lettersC.length - 1))];
}
