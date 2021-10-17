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


function resetVariables() {
    controls.board = ['', '', '', '', '', '', '', '', ''];
    controls.playerTurn = 0;
    controls.isGameOver = false;
}

// Check if there is a winner


function isWinner() {

    for (let i = 0; i < winnerSequences.length; i++) {

        let number = winnerSequences[i];

        let pos1 = number[0];
        let pos2 = number[1];
        let pos3 = number[2];

        if (controls.board[pos1] == controls.board[pos2] &&
            controls.board[pos1] == controls.board[pos3] &&
            controls.board[pos1] != '') {
            return true;
        }
    }
    return false;
}

// Check if there was a tied


function isTiedGame() {

    for (let i = 0; i < controls.board.length; i++) {
        if (controls.board[i] == '') {
            return false;
        }
    }

    if (controls.isGameOver) { return true };
}