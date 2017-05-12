

/*var player1 = prompt("Who is Player 1?");

var player2 = prompt("Who is Player 2?");*/

//Resets the board to be blank (step 1)
function clearBoard(){
  document.getElementById("box1").innerHTML = "";
  document.getElementById("box2").innerHTML = "";
  document.getElementById("box3").innerHTML = "";
  document.getElementById("box4").innerHTML = "";
  document.getElementById("box5").innerHTML = "";
  document.getElementById("box6").innerHTML = "";
  document.getElementById("box7").innerHTML = "";
  document.getElementById("box8").innerHTML = "";
  document.getElementById("box9").innerHTML = "";
};

//_________MAKE X SQUARE_______________________________

//Writes an X
function writeHTMLX (id){
  document.getElementById(id).innerHTML = "<h3>X</h3>";
}

//Necessary to make callback work, gets id attribute
function myNamedFunctionX() {
    var id = this.getAttribute("id");
    writeHTMLX(id);
    endTurnX();
    placeO();
    console.log("test writeX");
}

//step 3: remove event listeners
function endClickX(id) {
  console.log("test endClickX");

  document.getElementById(id).removeEventListener("click", myNamedFunctionX);
}

function endTurnX(){
  endClickX("box1");
  endClickX("box2");
  endClickX("box3");
  endClickX("box4");
  endClickX("box5");
  endClickX("box6");
  endClickX("box7");
  endClickX("box8");
  endClickX("box9");
};


//step 2: Place X in box when one of the divs is clicked, and then call next turn

function writeX(id) {
  document.getElementById(id).addEventListener("click", myNamedFunctionX);
};

function placeX(){
  writeX("box1");
  writeX("box2");
  writeX("box3");
  writeX("box4");
  writeX("box5");
  writeX("box6");
  writeX("box7");
  writeX("box8");
  writeX("box9");
};

//_________MAKE X SQUARE_______________________________

//Writes an O
function writeHTMLO (id){
  document.getElementById(id).innerHTML = "<h3>O</h3>";
}

//Necessary to make callback work, gets id attribute
function myNamedFunctionO() {
    var id = this.getAttribute("id");
    writeHTMLO(id);
    endTurnO();
    placeX();
    console.log("test writeO");
}

//step 3: remove event listeners
function endClickO(id) {
  console.log("test endClickO");

  document.getElementById(id).removeEventListener("click", myNamedFunctionO);
}

function endTurnO(){
  endClickO("box1");
  endClickO("box2");
  endClickO("box3");
  endClickO("box4");
  endClickO("box5");
  endClickO("box6");
  endClickO("box7");
  endClickO("box8");
  endClickO("box9");
};


//step 3: Place O in box when one of the divs is clicked, and then end turn

function writeO(id) {
  document.getElementById(id).addEventListener("click", myNamedFunctionO);
};

function placeO(){
  writeO("box1");
  writeO("box2");
  writeO("box3");
  writeO("box4");
  writeO("box5");
  writeO("box6");
  writeO("box7");
  writeO("box8");
  writeO("box9");
};






//_____________GAME PLAY_______________________
function play(){

  //step 1: clear the board
  clearBoard();

  //step 2: Player 1 turn 1, and end turn
  placeX();

  //step 3: Player 2 turn 1, and end turn

//End Play function
};





/*function clearBoard () {
  alert("test");
}*/
