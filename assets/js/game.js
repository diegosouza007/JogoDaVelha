// Model - MVC pattern

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let flags = ['x', 'o'];
let gameOver = false;
const winnerSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Add the flags in the board and change the game turn

function handleMove(position) {
    board[position] = flags[playerTurn];
    playerTurn === 0 ? playerTurn = 1 : playerTurn = 0;
}

// Change the main variables to default state

function clearVariables() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTurn = 0;
    gameOver = false;
}