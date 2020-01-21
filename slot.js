var colori = ["white","orange","#ff3300","#00FFFF","#FF00FF","#00C200"];
var colonne = ["S","S","S"];
var colTimer = 0;
var timerAttivo = "N";
var audioTimer = new Audio('timer.mp3');

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function tiraLevaTimer() {
  colTimer=0;
  colonne[0]="S";
  colonne[1]="S";
  colonne[2]="S";
  if (timerAttivo == "N") {
    tiraLeva();
    myTimer=setInterval(tiraLeva, 500);
    timerAttivo="S";
  }
  else {
    clearInterval(myTimer);
    timerAttivo="N";
  }
}

function tiraLeva() {
  colTimer+=1;
  if (colTimer == 6) {
    colonne[0]="N";
    }
  if (colTimer == 12) {
    colonne[1]="N";
    }
  if (colTimer == 20) {
    colonne[2]="N";
    clearInterval(myTimer);
    timerAttivo="N";
    }
  if (colonne[0]=="S") {
    document.getElementById("primo").style.borderColor = colori[(randomIntFromInterval(0,colori.length - 1))];
    num=randomIntFromInterval(0,1);
    if (num == 1) {
      document.getElementById("primo").style.borderLeftColor = "transparent";
      document.getElementById("primo").style.borderTopColor = "transparent";
      }
    audioTimer.play();
  }
  if (colonne[1]=="S") {
    document.getElementById("secondo").style.borderColor = colori[(randomIntFromInterval(0,colori.length - 1))];
    num=randomIntFromInterval(0,1);
    if (num == 1) {
      document.getElementById("secondo").style.borderRightColor = "transparent";
      document.getElementById("secondo").style.borderTopColor = "transparent";
    }
    audioTimer.play();
  }
  if (colonne[2]=="S") {
    document.getElementById("terzo").style.borderColor = colori[(randomIntFromInterval(0,colori.length - 1))];
    num=randomIntFromInterval(0,1);
    if (num == 1) {
      document.getElementById("terzo").style.borderLeftColor = "transparent";
      document.getElementById("terzo").style.borderBottomColor = "transparent";
    }
    audioTimer.play();
  }
}
