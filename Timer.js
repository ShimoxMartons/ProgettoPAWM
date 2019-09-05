var myvar;
var centime = 0;
var seconds = 0;
var minutes = 0;
var watchtime = "";

function crono(){

centime = 0;
seconds = 0;
minutes = 0;

myvar = setInterval(function(){

  watchtime = "";

  if(minutes < 10) watchtime += "0";
  watchtime += minutes + ":";
  if(seconds < 10) watchtime += "0";
  watchtime += seconds +  ":";
  if(centime < 10) watchtime += "0";
  watchtime += centime;

  document.getElementById("stopwatch").innerHTML = watchtime;
  centime++;
  if(centime == 100){
    centime = 0;
    seconds++;
  }
  if(seconds == 60) {
    seconds = 0;
    minutes++;
  }},10);
}

function ripristino(){
  document.getElementById("ctrlanswer").innerHTML = "";
  document.getElementById("answer").value ="";
  clearInterval(myvar);
}
