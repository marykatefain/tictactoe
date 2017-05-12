

/*var player1 = prompt("Who is Player 1?");

var player2 = prompt("Who is Player 2?");*/

//Resets the board to be blank (step 1)
function clearBoard(){
  document.getElementById("box0").innerHTML = " ";
  document.getElementById("box1").innerHTML = " ";
  document.getElementById("box2").innerHTML = " ";
  document.getElementById("box3").innerHTML = " ";
  document.getElementById("box4").innerHTML = " ";
  document.getElementById("box5").innerHTML = " ";
  document.getElementById("box6").innerHTML = " ";
  document.getElementById("box7").innerHTML = " ";
  document.getElementById("box8").innerHTML = " ";
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

function boardState() {
  var myList = document.querySelectorAll("h3");
  console.log(myList);

  var contentList = function() {
    myList[0].innerHTML; 
    myList[1].innerHTML;
    myList[2].innerHTML;
    myList[3].innerHTML;
    myList[4].innerHTML;
    myList[5].innerHTML;
    myList[6].innerHTML;
    myList[7].innerHTML;
    myList[8].innerHTML;
  };
  console.log(contentList);

};

/*function clearBoard () {
  alert("test");
}*/
