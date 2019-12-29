var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
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
  document.getElementById("lettera").innerHTML = letters[(randomIntFromInterval(0,letters.length - 1))];
}

function cambioOpac() {
  if (document.getElementById("bordo").style.opacity == 0) {
    document.getElementById("bordo").style.opacity = 1
  }
  else {
    document.getElementById("elemento2").style.opacity=0;  
  }
}
