/**
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2017  Mary Kate Fain
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

/* IF YOU HAVE TIME: MAKE PLAYER NAMES:
var player1 = prompt("Who is Player 1?");
var player2 = prompt("Who is Player 2?");
*/


(function () { //place everything in one anonymous function to avoid globally declared variables, following Best Practices

  var xTurn = "X";
  var oTurn = "O";
  var turn = xTurn;

  function changeTurn() {
      if (turn === xTurn) {
        turn = oTurn;
      }
      else {
        turn = xTurn;
      };
      return turn;
  };

  var boxes = document.querySelectorAll(".box");


  //Resets the board to be blank by looping through each box's ID and writing each h3 to have the hidden-text class. b is used to indicate a "blank" box on the board, and is checked against later
  function clickBoard() {
    var board = document.querySelector("#board");
    board.classList.add("clicky");
  };

  function deadBoard() {
    var board = document.querySelector("#board");
    board.classList.remove("clicky");
  };

  function clearBoard() {
    clickBoard();
    for (i = 0; i < boxes.length; i++) {
      document.getElementById("box" + i).innerHTML = '<h3 class="hidden-text">b</h3>';
    };
    turn = xTurn;
    return turn;
  };


  //______PLAYER TURN SWITCH AND CLEARING PLAYERS____________________

  function player1Turn() {
    var player1 = document.querySelector("#player1");
    player1.classList.toggle("active");
  };

  function player2Turn() {
    var player2 = document.querySelector("#player2");
    player2.classList.toggle("active");
  };

  function clearPlayer() {
    var player1 = document.querySelector("#player1");
    player1.classList.remove("active");

    var player2 = document.querySelector("#player2");
    player2.classList.remove("active");
  }

  function restart() {

    clearPlayer();

    var winnerX = document.querySelector("#x-wins");
    winnerX.classList.add("hidden-text");

    var winnerO = document.querySelector("#o-wins");
    winnerO.classList.add("hidden-text");

    var tie = document.querySelector("#tie");
    tie.classList.add("hidden-text");

    var replay = document.querySelector("#replay");
    replay.classList.add("hidden-text");
  };


  //_________PLACE PIECE IN SQUARE ON CLICK_______________________________

  //Writes an X
  function writeHTML (id){
    document.getElementById(id).innerHTML = "<h3>" + turn + "</h3>";
  };


  function clickHandler() {
      var id = this.getAttribute("id");
      writeHTML(id);
      endTurn();
      player1Turn();
      player2Turn();
      boardState();
      changeTurn();
      placePiece();
  };

  //remove event listeners
  function endClick(id) {
    document.getElementById(id).removeEventListener("click", clickHandler);
    document.getElementById(id).classList.remove("clicky");
  };

  function endTurn() {
    for (i = 0; i < boxes.length; i++) {
      endClick("box" + i);
    };
  };


  //Place piece in box when an empty box is clicked, and then call next turn

  function activateSquares(id) {
    var blank = '<h3 class="hidden-text">b</h3>';
    var squareStatus = document.getElementById(id).innerHTML;
    if (squareStatus == blank) {
      document.getElementById(id).addEventListener("click", clickHandler);
      document.getElementById(id).classList.add("clicky");
    };
  };


  function placePiece() {
    for (i = 0; i < boxes.length; i++) {
      activateSquares("box" + i);
    };
  };


  //___________X WIN STATES _________________

  var xWinState1 = ["X", "X", "X", "b", "b", "b", "b", "b", "b"];
  var xWinState2 = ["b", "b", "b", "X", "X", "X", "b", "b", "b"];
  var xWinState3 = ["b", "b", "b", "b", "b", "b", "X", "X", "X"];
  var xWinState4 = ["X", "b", "b", "X", "b", "b", "X", "b", "b"];
  var xWinState5 = ["b", "X", "b", "b", "X", "b", "b", "X", "b"];
  var xWinState6 = ["b", "b", "X", "b", "b", "X", "b", "b", "X"];
  var xWinState7 = ["X", "b", "b", "b", "X", "b", "b", "b", "X"];
  var xWinState8 = ["b", "b", "X", "b", "X", "b", "X", "b", "b"];

  var xWinStates = [xWinState1, xWinState2, xWinState3, xWinState4, xWinState5, xWinState6, xWinState7, xWinState8];

  //______________O WIN STATES ________________

  var oWinState1 = ["O", "O", "O", "b", "b", "b", "b", "b", "b"];
  var oWinState2 = ["b", "b", "b", "O", "O", "O", "b", "b", "b"];
  var oWinState3 = ["b", "b", "b", "b", "b", "b", "O", "O", "O"];
  var oWinState4 = ["O", "b", "b", "O", "b", "b", "O", "b", "b"];
  var oWinState5 = ["b", "O", "b", "b", "O", "b", "b", "O", "b"];
  var oWinState6 = ["b", "b", "O", "b", "b", "O", "b", "b", "O"];
  var oWinState7 = ["O", "b", "b", "b", "O", "b", "b", "b", "O"];
  var oWinState8 = ["b", "b", "O", "b", "O", "b", "O", "b", "b"];

  var oWinStates = [oWinState1, oWinState2, oWinState3, oWinState4, oWinState5, oWinState6, oWinState7, oWinState8];


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

   var boardPattern = [square0, square1, square2, square3, square4, square5, square6, square7, square8]


   //toggles winner announcement display, called when win condition is met, and clear Player
    function replay() {
       var replayButton = document.querySelector("#replay");
       replayButton.classList.remove("hidden-text");
     };

     function player1Wins() {
       var anouncement = document.querySelector("#x-wins");
       anouncement.classList.remove("hidden-text");
       clearPlayer();
       replay();
       document.querySelectorAll("box").classList.remove("clicky");
     };

     function player2Wins() {
       var anouncement = document.querySelector("#o-wins");
       anouncement.classList.remove("hidden-text");
       clearPlayer();
       replay();
       document.querySelectorAll("box").classList.remove("clicky");
     };

    //Checks if X board patterns are equal to any X win states, by looping through win state array and skipping blank squares and only comparing X squares
    function XisEqual(win, board) {
      for (var i = 0; i < 9; i++) {
        if (win[i] == 'b') continue;
        if (win[i] != board[i]) {
          return false;
        };
      };
      console.log("X Wins!");
      player1Wins();
      deadBoard();
    };

    function checkWinX() {
      for (var i = 0; i < xWinStates.length; i++) {
        XisEqual(xWinStates[i], boardPattern);
      };
    };

    checkWinX();

    //Checks if O board patterns are equal to any O win states, by looping through win state array and skipping blank squares and only comparing O squares
    function OisEqual(win, board) {
      for (var i = 0; i < 9; i++) {
        if (win[i] == 'b') continue;
        if (win[i] != board[i]) {
          return false;
        };
      };
      console.log("O Wins!");
      player2Wins();
      deadBoard();
    };


  function checkWinO() {
    for (var i = 0; i < oWinStates.length; i++) {
      OisEqual(oWinStates[i], boardPattern);
    };
  };

  checkWinO();

  // Anounce game tie
  function isEmpty(id) {
    var blank = '<h3 class="hidden-text">b</h3>';
    var squareStatus = document.getElementById(id).innerHTML;

    if (squareStatus == blank) {
      return true;
    } else {
      return false
    }
  };

  function CheckIfTie() {
    var anouncement = document.querySelector("#tie");
    for (i = 0; i < boxes.length; i++) {
      if (isEmpty("box" + i)) {
        return false
      }
    };
    anouncement.classList.remove("hidden-text");
    replay();
    return true;
  };

  CheckIfTie();

  }; //End boardState()



  //_____________GAME PLAY_______________________
  function play(){

    //Clear the board, any active player turn, and start player turn toggle
    clearBoard();
    restart();
    player1Turn();

    //Players alternatively click, event listeners turn on and off allow placement of X or O
    //board state checked after each turn for winner
    placePiece();
  };

  document.getElementById("play").addEventListener("click", function() {
    play();
  });

  document.getElementById("replay").addEventListener("click", function() {
    play();
  });

})(); //end global function
