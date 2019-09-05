var array = [];
var control = false;
var kind;

function matrixnumbers(numbers, nbit) {

  for(j = 0; j < numbers; j++){
    var binario = 0;
    var decimale = 0;
    var esadecimale = 0;
    var stringabin = "";
    var dec = "";
    var hexa = "";
    array[j] = new Array(3);
    decimale = Math.floor(Math.random() * Math.pow(2,nbit));
    dec = decimale.toString();
    for(i = 0; i < nbit; i++){
      binario = decimale%2;
      decimale = Math.floor(decimale/2);
      stringabin = binario.toString() + stringabin;
    }
    decimale = parseInt(dec,10);
    for(i = 0; i < (nbit/4); i++){
      esadecimale = decimale%16;
      decimale = Math.floor(decimale/16);
      hexa = esadecimale.toString(16).toUpperCase() + hexa;
    }
    array[j][0] = dec;
    array[j][1] = stringabin;
    array[j][2] = hexa;
  }


}

function game(ip, ic, max, k){ // ip:indice print  ic: indice control
    if(k < max){
    document.getElementById("question").innerHTML = array[k][ip];
    document.getElementById("answer").onkeydown = function(e){if(e.keyCode == 13){
      control = true;
      game(ip,ic,max,k);
    }};
    document.getElementById("check").onclick = function() {
      control = true;
      game(ip,ic,max,k);
    };
    if(control){
      var answered = document.getElementById("answer").value.toUpperCase();
      if(answered == array[k][ic]){
        document.getElementById("ctrlanswer").style.color = "#7FFF00";
        document.getElementById("ctrlanswer").innerHTML = "Correct!";
        document.getElementById("answer").value = "";
        k++;
        control = false;
        game(ip,ic,max,k);
      }
      else{
      document.getElementById("ctrlanswer").style.color = "red";
      document.getElementById("ctrlanswer").innerHTML = "Wrong!";
      control = false;
      game(ip,ic,max,k);
    }
    }else{
    game(ip,ic,max,k);
    }
  }else{
      ripristino();
      kind = tc+""+num+""+bit;
      shidden(document.getElementById("thegame").id,document.getElementById("yourtime").id);
      document.getElementById("showresult").innerHTML = "Your Time <br>"+watchtime;
      dbsend();
    }
  //document.getElementById("showresult").innerHTML = "Your Time <br>"+watchtime+"minut "+minutes;
}

function dbsend(){
  $.post('dbcon.php',{mode:kind,name:player,min:minutes,sec:seconds,centsec:(centime-1)});
}

function dbget(){
  $.get('dbcon.php',{mode:mconc});
}
