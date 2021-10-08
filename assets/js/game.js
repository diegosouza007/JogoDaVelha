// Model - MVC pattern

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let flags = ['x', 'o'];

function handleMove(position) {

    board[position] = flags[playerTurn];

    playerTurn === 0 ? playerTurn = 1 : playerTurn = 0;

}