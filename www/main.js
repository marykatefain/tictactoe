
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

//Place X in box when one of the divs is clicked, and then call next turn
function placeX(){
  document.getElementById("box1").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box2").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box3").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box4").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box5").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box6").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box7").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box8").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });
  document.getElementById("box9").addEventListener("click", function() {
    this.innerHTML = "<h3>X</h3>";
  });

}


//Game Play Function Calls
function play(){
  //step 1: clear the board
  clearBoard();

  //step 2: Player 1 turn 1
  placeX();


//End Play function
};





/*function clearBoard () {
  alert("test");
}*/
