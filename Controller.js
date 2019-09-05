var player;
var tc;
var num;
var bit;
var mconc;

function checkenter(){
  document.getElementById("name").onkeydown = function(e){if(e.keyCode == 13){checkname();}};
}

function menu(typeconv,qtynum,qtybit){
  crono();
  tc = document.getElementById(typeconv).value;
  num = parseInt(document.getElementById(qtynum).value,10);
  bit = parseInt(document.getElementById(qtybit).value,10);

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
    document.getElementById("msgctrlname").innerHTML = "";
    player = document.getElementById("name").value;
    shidden("inputname","inputgame");
  }else{
    document.getElementById("msgctrlname").innerHTML = "Enter a valid name";
  }
}

function shidden(id1,id2){
  //document.getElementById(p1).innerHTML= document.getElementById(p2).innerHTML;
  document.getElementById(id1).style.display="none";
  document.getElementById(id2).style.display="block";
}

function printrank(){
  clearranking();
  var type = document.getElementById("gamemode").value;
  var numb = document.getElementById("numnumber").value;
  var bitn = document.getElementById("bitnumber").value;
  mconc = type+""+numb+""+bitn;
  dbget();
  var mytable = document.getElementById("rankingtable");
  var Connect = new XMLHttpRequest();
  Connect.open("GET", "out.xml", false);
  Connect.setRequestHeader("Content-Type", "text/xml");
  Connect.send(null);
  var TheDocument = Connect.responseXML;
  var list = TheDocument.childNodes[0];
  for (var i = 0; i < list.children.length; i++){
    var child = list.children[i];
    document.getElementById(""+i+"0").innerHTML = child.getAttribute("name");
    document.getElementById(""+i+"1").innerHTML = child.getAttribute("time");
  }
}

function clearranking(){
  for(var i = 0;i <10; i++){
    document.getElementById(""+i+"0").innerHTML = "";
    document.getElementById(""+i+"1").innerHTML = "";
  }
}
