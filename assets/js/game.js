let gameMode = JSON.parse(localStorage.getItem('@tictactoe:gamemode'));

let controls = {
    board: ['', '', '', '', '', '', '', '', ''],
    playerTurn: 0,
    flags: ['x', 'o'],
    isGameOver: false,
    score: [0, 0]
}

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

function handleMove(position) {
    controls.board[position] = controls.flags[controls.playerTurn];
    controls.playerTurn === 0 ? controls.playerTurn = 1 : controls.playerTurn = 0;
}

function resetVariables() {
    controls.board = ['', '', '', '', '', '', '', '', ''];
    controls.playerTurn = 0;
    controls.isGameOver = false;
    controls.score = [0, 0];
}

function clearBoard() {
    controls.board = ['', '', '', '', '', '', '', '', ''];
    controls.playerTurn = 0;
    controls.isGameOver = false;
}

function isWinner() {

    for (let i = 0; i < winnerSequences.length; i++) {

        let seq = winnerSequences[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (controls.board[pos1] == controls.board[pos2] &&
            controls.board[pos1] == controls.board[pos3] &&
            controls.board[pos1] != '') {
            return true;
        }
    }
    return false;
}

function isTiedGame() {

    if (controls.board.includes('')) {
        return false;
    } else {
        return true;
    }
}