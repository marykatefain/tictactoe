# Tic-Tac-Toe
## _The classic two-player game_
[View the site](http://mkf-tic-tac-toe.surge.sh/)
### About

A simple front-end website written in JavaScript for playing a locally turn-based game of tic-tac-toe with your pal (or with yourself, no judgment).

The game begins upon clicking the "Play" button, which clears the board and allows Player 1 to place an "X" on the board. Players are able to keep track of who's turn it is based on the highlighted Player details on the far right (or far bottom on mobile).

Game play ends either when one Player achieves 3 in a row, or the board is reset.

### Download and Deploy

To clone this repo: `git clone https://github.com/punkave/tic-tac-toe-mary-kate.git`

Deploy from the command line for free on surge.sh with `surge www`.

Deploy to a custom URL by editing the CNAME file.

### How it Works

Clicking "Play!" clears the board of the placeholder symbols and replaces them with hidden "b"s, which serve as indication of a "blank" space. Player 1's turn is called, which triggers an eventListener to place an "X" upon clicking a square. Once the click is made, the eventListener is turned off, and Player 2's turn is called. The eventListener is only applied to empty spaces, which prevents players from changing the current board state. Turns switch on and off between X and O.

After each turn, the board state is checked against all possible win conditions for X and O, and a winner is announced if a win condition is met.
