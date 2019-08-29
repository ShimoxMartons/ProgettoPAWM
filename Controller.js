
function checkenter(){
  document.getElementById("name").onkeydown = function(e){if(e.keyCode == 13){checkname();}};
}

function menu(typeconv,qtynum,qtybit){
  crono();
  var tc = document.getElementById(typeconv).value;
  var num = parseInt(document.getElementById(qtynum).value,10);
  var bit = parseInt(document.getElementById(qtybit).value,10);

  matrixnumbers(num,bit);

  switch(tc){

    case "0":
      //binario to decimale
      game(1,0,num,0);
      break;
    case "1":
      //decimale to binario
      game(0,1,num,0);
      break;
    case "2":
      //binario to esadecimale
      game(1,2, num,0);
      break;
    case "3":
      //esadecimale to binario
      game(2,1, num,0);
      break;
  }

}



function checkname() {
  if(document.getElementById("name").value != ""){
    idname = document.getElementById("inputname").id;
    idmenu = document.getElementById("inputgame").id;
    document.getElementById("msgctrlname").innerHTML = "";
    shidden(idname,idmenu);
  }else{
    document.getElementById("msgctrlname").innerHTML = "Enter a valid name";
  }
}

function shidden(id1,id2){
  //document.getElementById(p1).innerHTML= document.getElementById(p2).innerHTML;
  document.getElementById(id1).style.display="none";
  document.getElementById(id2).style.display="block";
}
