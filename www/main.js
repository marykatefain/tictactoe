

/*var player1 = prompt("Who is Player 1?");

var player2 = prompt("Who is Player 2?");*/

//Resets the board to be blank (step 1)
function clearBoard(){
  document.getElementById("box0").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box1").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box2").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box3").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box4").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box5").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box6").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box7").innerHTML = "<h3 class='hidden-text'>b</h3>";
  document.getElementById("box8").innerHTML = "<h3 class='hidden-text'>b</h3>";
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
    boardState();
}

//step 3: remove event listeners
function endClickX(id) {
  document.getElementById(id).removeEventListener("click", myNamedFunctionX);
}

function endTurnX(){
  endClickX("box0");
  endClickX("box1");
  endClickX("box2");
  endClickX("box3");
  endClickX("box4");
  endClickX("box5");
  endClickX("box6");
  endClickX("box7");
  endClickX("box8");
};


//step 2: Place X in box when one of the divs is clicked, and then call next turn

function writeX(id) {
  document.getElementById(id).addEventListener("click", myNamedFunctionX);
};

function placeX(){
  writeX("box0");
  writeX("box1");
  writeX("box2");
  writeX("box3");
  writeX("box4");
  writeX("box5");
  writeX("box6");
  writeX("box7");
  writeX("box8");
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
    boardState();
}

//step 3: remove event listeners
function endClickO(id) {
  document.getElementById(id).removeEventListener("click", myNamedFunctionO);
}

function endTurnO(){
  endClickO("box0");
  endClickO("box1");
  endClickO("box2");
  endClickO("box3");
  endClickO("box4");
  endClickO("box5");
  endClickO("box6");
  endClickO("box7");
  endClickO("box8");
};


//step 3: Place O in box when one of the divs is clicked, and then end turn

function writeO(id) {
  document.getElementById(id).addEventListener("click", myNamedFunctionO);
};

function placeO(){
  writeO("box0");
  writeO("box1");
  writeO("box2");
  writeO("box3");
  writeO("box4");
  writeO("box5");
  writeO("box6");
  writeO("box7");
  writeO("box8");
};






//_____________GAME PLAY_______________________
function play(){

  //step 1: clear the board
  clearBoard();

  //step 2: Players alternatively click
  placeX();

  //Get board state


//End Play function
};

//Returns the board state as an array based on the letter in each square
function boardState() {
  var myList = document.querySelectorAll("h3");

  var square0 = myList[0].innerHTML;
  var square1 = myList[1].innerHTML;
  var square2 = myList[2].innerHTML;
  var square3 = myList[3].innerHTML;
  var square4 = myList[4].innerHTML;
  var square5 = myList[5].innerHTML;
  var square6 = myList[6].innerHTML;
  var square7 = myList[7].innerHTML;
  var square8 = myList[8].innerHTML;

 var boardPattern =[square0, square1, square2, square3, square4, square5, square6, square7, square8]

  console.log(boardPattern);

};

/*function clearBoard () {
  alert("test");
}*/
