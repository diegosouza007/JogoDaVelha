const gameOverSound = document.getElementById('gameover');
const resetButton = document.getElementById('reset');
const playerXScore = document.getElementById('player-x-score');
const playerOScore = document.getElementById('player-o-score');

resetButton.addEventListener('click', resetGame);
document.addEventListener('DOMContentLoaded', () => {

    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', playPlayerTurn);
    })
})

function playPlayerTurn(event) {

    let position = event.target.id;

    playGame(position)
        .then(() => {
            if (gameMode === 'pve') {
                playBotTurn();
            }
        })
        .then(checkStatusGame);
}

function playBotTurn() {

    let position = getRandomAvailablePosition();

    if (!CONTROLS.isGameOver) {
        setTimeout(() => {
            playGame(position)
                .then(checkStatusGame);
        }, 50)
    }
}

function loadFlagsOnBoard() {

    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {

        let position = cell.getAttribute('id');
        let flag = CONTROLS.board[position];

        if (flag != '') {
            cell.classList.add(flag);
        }
    })

    CONTROLS.isGameOver = isWinner();
}

function toggleBoardHoverFlag() {

    let board = document.querySelector('.board');

    if (board.classList.contains('x')) {
        board.classList.remove('x');
        board.classList.add('o');
    } else {
        board.classList.remove('o');
        board.classList.add('x');
    }
}

function nextRound() {

    let board = document.querySelector('.board');
    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
    })

    if (board.classList.contains('o')) {
        board.classList.remove('o');
        board.classList.add('x');
    }

    clearBoard();
}

function playGame(position) {

    let promisse = new Promise((resolve, reject) => {

        if (CONTROLS.board[position] != '') {
            return;
        }

        handleMove(position);
        loadFlagsOnBoard();
        toggleBoardHoverFlag();

        resolve();
    });

    return promisse;
}

function checkStatusGame() {

    let hasTied = isTiedGame();
    let player = CONTROLS.playerTurn;

    if (CONTROLS.isGameOver) {

        gameOverSound.play();
        updateScore(player);

        setTimeout(() => {
            nextRound();
            return;
        }, 320);
    } else if (hasTied) {

        gameOverSound.play();

        setTimeout(() => {
            nextRound();
            return;
        }, 320);
    }
}

function updateScore(player) {

    player === 1 ? CONTROLS.score[0]++ : CONTROLS.score[1]++;

    playerXScore.innerHTML = CONTROLS.score[0];
    playerOScore.innerHTML = CONTROLS.score[1];
}

function resetGame() {

    let board = document.querySelector('.board');
    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
    })

    if (board.classList.contains('o')) {
        board.classList.remove('o');
        board.classList.add('x');
    }

    resetVariables();

    playerXScore.innerHTML = CONTROLS.score[0];
    playerOScore.innerHTML = CONTROLS.score[1];
}