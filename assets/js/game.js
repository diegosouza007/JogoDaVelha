// PlayerTurn: The Player is 0 value and BOT is 1 value


let controls = {
    board: ['', '', '', '', '', '', '', '', ''],
    playerTurn: 0,
    flags: ['x', 'o'],
    isGameOver: false,
    score: [0, 0]
}

// Receive the selected mode: PvE or PvP


let gameMode = JSON.parse(localStorage.getItem("GameMode"));

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
    controls.board[position] = controls.flags[controls.playerTurn];
    controls.playerTurn === 0 ? controls.playerTurn = 1 : controls.playerTurn = 0;
}

// Change the main variables to default state


function clearVariables() {
    controls.board = ['', '', '', '', '', '', '', '', ''];
    controls.playerTurn = 0;
    controls.isGameOver = false;
}