const gameOverSound = document.getElementById('gameover');
const resetButton = document.getElementById('reset');
const playerX = document.getElementById('player-x-score');
const playerO = document.getElementById('player-o-score');

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

    let position = getRandomNumber();

    if (!controls.isGameOver) {
        setTimeout(() => {
            playGame(position)
                .then(checkStatusGame);
        }, 50)
    }
}

let getRandomNumber = function() {

    let [pos, number, emptyPos] = ['', '', ''];

    let newArr = controls.board.map((position, index) => {
        if (position === '') {
            emptyPos += index;
        };
    })

    newArr = Array.from(emptyPos);
    pos = Math.floor(Math.random() * newArr.length);
    number = newArr[pos];

    return number;
}

function loadFlagsOnBoard() {

    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {

        let position = cell.getAttribute('id');
        let flag = controls.board[position];

        if (flag != '') {
            cell.classList.add(flag);
        }
    })

    controls.isGameOver = isWinner();
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

        if (controls.board[position] != '') {
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
    let player = controls.playerTurn;

    if (controls.isGameOver) {

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

    player === 1 ? controls.score[0]++ : controls.score[1]++;

    playerX.innerHTML = controls.score[0];
    playerO.innerHTML = controls.score[1];
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

    playerX.innerHTML = controls.score[0];
    playerO.innerHTML = controls.score[1];
}