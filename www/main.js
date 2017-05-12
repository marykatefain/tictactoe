
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



//step 3: remove event listeners
function endClick(id) {
  document.getElementById(id).removeEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
}

function endTurn(){
  endClick("box1");
  endClick("box2");
  endClick("box3");
  endClick("box4");
  endClick("box5");
  endClick("box6");
  endClick("box7");
  endClick("box8");
  endClick("box9");
};


//step 2: Place X in box when one of the divs is clicked, and then call next turn
function writeHTML (id){
  document.getElementById(id).innerHTML = "<h3>X</h3>";
}

function writeX(id) {
  document.getElementById(id).addEventListener("click", function() {
      writeHTML(id);
  });
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


//Game Play Function Calls
function play(){

  //step 1: clear the board
  clearBoard();

  //step 2: Player 1 turn 1
  placeX();

  //step 3: End eventListeners from step 2


//End Play function
};





/*function clearBoard () {
  alert("test");
}*/
