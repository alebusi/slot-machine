var colori = ["white","orange","#ff3300","#00FFFF","#FF00FF","#00C200","black"];
var timerAttivo = "N";

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function tiraLevaTimer() {
  if (timerAttivo == "N") {
    tiraLeva();
    myTimer=setInterval(tiraLeva, 5000);
    timerAttivo="S";
  }
  else {
    clearInterval(myTimer);
    timerAttivo="N";
  }
}

function tiraLeva() {
  document.getElementById("primo").style.borderColor = colori[(randomIntFromInterval(0,colori.length - 1))];
  document.getElementById("secondo").style.borderColor = colori[(randomIntFromInterval(0,colori.length - 1))];
  document.getElementById("terzo").style.borderColor = colori[(randomIntFromInterval(0,colori.length - 1))];
  document.getElementById("quarto").style.borderColor = colori[(randomIntFromInterval(0,colori.length - 1))];
}
