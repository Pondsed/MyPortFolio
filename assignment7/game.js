window.onload = pageLoad;
let deleted = 0;

function pageLoad(){
 let start = document.getElementById("start");
 start.onclick = startGame;
}

function startGame(){
 alert("Ready");
 addBox();
 timeStart();
}

function timeStart(){
 var TIMER_TICK = 1000;
 var timer = null;
 var min = 0.5;
 var second = min*60; 
 var x = document.getElementById('clock');
 timer = setInterval(timeCount,TIMER_TICK);
 function timeCount(){
  var numbox = document.getElementById("numbox").value;
  var allbox = document.querySelectorAll("#layer div");
  if(second > 0){
   second -= 1;
   x.innerHTML = second;
   document.getElementById("score").innerHTML = deleted +"/"+numbox;
  }
  else{
   timer = null;
   x.innerHTML = ("");
   document.getElementById("score").innerHTML = " ";
   deleted = 0;
   numbox = 0;
   alert("game over");
   clearInterval(timer);
   clearScreen();
  }
  if(allbox.length == 0){
   timer = null;
   x.innerHTML = ("");
   document.getElementById("score").innerHTML = " ";
   deleted = 0;
   numbox = 0;
   alert("you win");
   clearInterval(timer);
  }
 }
}
function addBox(){
 var numbox = document.getElementById("numbox").value;
 var gameLayer = document.getElementById("layer");
 var colorDrop = document.getElementById("color").value;
 for (var i =0; i<numbox;i++){
  var tempbox = document.createElement("div");
  tempbox.className = "square";
  tempbox.classList.add(colorDrop);
  tempbox.id = "box"+i;
  tempbox.style.left = Math.random() * (500 - 25) + "px";
  tempbox.style.top = Math.random() * (500 - 25) + "px";
  gameLayer.appendChild(tempbox);
  bindBox(tempbox);
 }
}
function bindBox(box){
 box.onclick = function(){
  box.parentNode.removeChild(box); 
  deleted++;
  return deleted;
 }
}
function clearScreen(){
 var allbox = document.querySelectorAll("#layer div");
 for (var i=0;i<allbox.length+deleted;i++){
  var x = document.getElementById("box"+i)
  if(document.body.contains(x))
  {
   x.parentNode.removeChild(x);
  }
 }
}