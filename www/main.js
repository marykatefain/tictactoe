
/* IF YOU HAVE TIME: MAKE PLAYER NAMES:
var player1 = prompt("Who is Player 1?");
var player2 = prompt("Who is Player 2?");
*/

//Resets the board to be blank
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

//______PLAYER TURN SWITCH AND CLEARING PLAYERS____________________

function player1Turn() {
  var player1 = document.querySelector("#player1");
  player1.classList.toggle("active");
};

function player2Turn() {
  var player1 = document.querySelector("#player2");
  player1.classList.toggle("active");
};

function clearPlayer() {
  var player1 = document.querySelector("#player1");
  player1.classList.remove("active");

  var player1 = document.querySelector("#player2");
  player1.classList.remove("active");
};


//_________MAKE X SQUARE ON CLICK_______________________________

//Writes an X
function writeHTMLX (id){
  document.getElementById(id).innerHTML = "<h3>X</h3>";
}

//Necessary to make callback work, gets id attribute
function myNamedFunctionX() {
    var id = this.getAttribute("id");
    writeHTMLX(id);
    endTurnX();
    player1Turn();
    player2Turn();
    placeO();
    boardState();
}

//remove event listeners
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


//Place X in box when one of the divs is clicked, and then call next turn
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



//_________MAKE O SQUARE ON CLICK_______________________________

//Writes an O
function writeHTMLO (id){
  document.getElementById(id).innerHTML = "<h3>O</h3>";
}

//Necessary to make callback work, gets id attribute
function myNamedFunctionO() {
    var id = this.getAttribute("id");
    writeHTMLO(id);
    endTurnO();
    player1Turn();
    player2Turn();
    placeX();
    boardState();
}

//remove event listeners
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


//Place O in box when one of the divs is clicked, and then end turn
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


//_________________BOARD STATE AND WINNING_______________________

//Returns the board state as an array based on the letter in each square, and checks against X and O win states after each turn
function boardState() {

  //Pulls inner HTML of each box and puts them into an array
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
  console.log(xWinState1);

  //Checks if X board patterns are equal to any X win states, by looping through win state array and skipping blank squares and only comparing X squares
  function XisEqual(win, board) {
    for (var i=0; i<9; i++) {
      if (win[i] == 'b') continue;
      if (win[i] != board[i]) {
        return false;
      };
    };
    alert("X Wins!");
  };

  //Call win check on each X win state
  XisEqual(xWinState1, boardPattern);
  XisEqual(xWinState2, boardPattern);
  XisEqual(xWinState3, boardPattern);
  XisEqual(xWinState4, boardPattern);
  XisEqual(xWinState5, boardPattern);
  XisEqual(xWinState6, boardPattern);
  XisEqual(xWinState7, boardPattern);
  XisEqual(xWinState8, boardPattern);

//Checks if O board patterns are equal to any O win states, by looping through win state array and skipping blank squares and only comparing O squares
function OisEqual(win, board) {
  for (var i=0; i<9; i++) {
    if (win[i] == 'b') continue;
    if (win[i] != board[i]) {
      return false;
    };
  };
  alert("O Wins!");
};

//Call win check on each O win state
  OisEqual(oWinState1, boardPattern);
  OisEqual(oWinState2, boardPattern);
  OisEqual(oWinState3, boardPattern);
  OisEqual(oWinState4, boardPattern);
  OisEqual(oWinState5, boardPattern);
  OisEqual(oWinState6, boardPattern);
  OisEqual(oWinState7, boardPattern);
  OisEqual(oWinState8, boardPattern);

}; //End boardState()


//____X WIN STATES ________

var xWinStates = [xWinState1, xWinState2, xWinState3, xWinState4, xWinState5, xWinState6, xWinState7, xWinState8];

var xWinState1 = ["X", "X", "X", "b", "b", "b", "b", "b", "b"];
var xWinState2 = ["b", "b", "b", "X", "X", "X", "b", "b", "b"];
var xWinState3 = ["b", "b", "b", "b", "b", "b", "X", "X", "X"];
var xWinState4 = ["X", "b", "b", "X", "b", "b", "X", "b", "b"];
var xWinState5 = ["b", "X", "b", "b", "X", "b", "b", "X", "b"];
var xWinState6 = ["b", "b", "X", "b", "b", "X", "b", "b", "X"];
var xWinState7 = ["X", "b", "b", "b", "X", "b", "b", "b", "X"];
var xWinState8 = ["b", "b", "X", "b", "X", "b", "X", "b", "b"];

//____O WIN STATES ________

var oWinStates = [oWinState1, oWinState2, oWinState3, oWinState4, oWinState5, oWinState6, oWinState7, oWinState8];


var oWinState1 = ["O", "O", "O", "b", "b", "b", "b", "b", "b"];
var oWinState2 = ["b", "b", "b", "O", "O", "O", "b", "b", "b"];
var oWinState3 = ["b", "b", "b", "b", "b", "b", "O", "O", "O"];
var oWinState4 = ["O", "b", "b", "O", "b", "b", "O", "b", "b"];
var oWinState5 = ["b", "O", "b", "b", "O", "b", "b", "O", "b"];
var oWinState6 = ["b", "b", "O", "b", "b", "O", "b", "b", "O"];
var oWinState7 = ["O", "b", "b", "b", "O", "b", "b", "b", "O"];
var oWinState8 = ["b", "b", "O", "b", "O", "b", "O", "b", "b"];


//_____________GAME PLAY_______________________
function play(){

  //Clear the board, any active player turn, and start player turn toggle
  clearBoard();
  clearPlayer();
  player1Turn();

  //Players alternatively click, event listeners turn on and off allow placement of X or O
  //board state checked after each turn for winner
  placeX();
};
