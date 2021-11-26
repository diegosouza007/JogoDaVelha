let gameMode = JSON.parse(localStorage.getItem('@tictactoe:gamemode'));

const CONTROLS = {
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
    CONTROLS.board[position] = CONTROLS.flags[CONTROLS.playerTurn];
    CONTROLS.playerTurn === 0 ? CONTROLS.playerTurn = 1 : CONTROLS.playerTurn = 0;
}

function resetVariables() {
    CONTROLS.board = ['', '', '', '', '', '', '', '', ''];
    CONTROLS.playerTurn = 0;
    CONTROLS.isGameOver = false;
    CONTROLS.score = [0, 0];
}

function clearBoard() {
    CONTROLS.board = ['', '', '', '', '', '', '', '', ''];
    CONTROLS.playerTurn = 0;
    CONTROLS.isGameOver = false;
}

function isWinner() {

    for (let i = 0; i < winnerSequences.length; i++) {

        let seq = winnerSequences[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (CONTROLS.board[pos1] == CONTROLS.board[pos2] &&
            CONTROLS.board[pos1] == CONTROLS.board[pos3] &&
            CONTROLS.board[pos1] != '') {
            return true;
        }
    }
    return false;
}

function isTiedGame() {

    if (CONTROLS.board.includes('')) {
        return false;
    } else {
        return true;
    }
}

function availablePositions() {

    let arr = CONTROLS.board.filter(p => p === '');
    return arr
}

let getRandomAvailablePosition = function() {

    let [pos, number, newArr] = ['', '', []];

    CONTROLS.board.map((pos, index) => {
        if (pos === '') {
            newArr.push(index);
        };
    })

    pos = Math.floor(Math.random() * newArr.length);
    number = newArr[pos];

    return number;
}