var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var dimensione = ["80px","120px","160px","200px","240px"];
var peso = ["200","300","400","500","600","700","800","900"];
var timerAttivo = "N";
var ind = 1;
var ind_p = 4;

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
    document.getElementById("bordo").style.opacity=0;  
  }
}
function cambioDimensione() {
  ind+=1;
  if (ind > dimensione.length-1) ind=0;
  document.getElementById("lettera").style.fontSize=dimensione[ind];
}
function cambioPeso() {
  ind_p+=1;
  if (ind_p > peso.length-1) ind_p=0;
  document.getElementById("lettera").style.fontWeight=peso[ind];
}
