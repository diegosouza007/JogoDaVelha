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

// ---------------- PLAYER ACTION ---------------- //


function playPlayerTurn(event) {

    let position = event.target.id;

    playGame(position).
    then(() => {
        if (gameMode === 'pve') {
            playBotTurn();
        }
    }).then(checkStatusGame);
}

// ------------------ BOT ACTION ------------------ //


function playBotTurn() {

    let position = getRandomNumber();

    setTimeout(() => {
        playGame(position).
        then(checkStatusGame);
    }, 250)
}

/** Receive the variable board and return a random positon according
 *          with the empty postions avaible in array
 **/


let getRandomNumber = function() {

    let [position, number, emptyPositions] = ['', '', ''];

    let newArray = controls.board.map((value, index) => {
        if (value === '') {
            emptyPositions += index;
        };
    })

    newArray = Array.from(emptyPositions);
    position = Math.floor(Math.random() * newArray.length);
    number = newArray[position];

    return number;
}

// Read the array board updated and insert in cells the X or O flags 


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
    setTimeout(() => checkStatusGame(), 25);
}

// Switch between X or O the hover effect in the cells 


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

// Clear all cells and start a new round


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
}

// Run the player/BOT action

function playGame(position) {

    let promisse = new Promise((resolve, reject) => {

        handleMove(position);
        setTimeout(() => loadFlagsOnBoard());
        toggleBoardHoverFlag();

        resolve();

    });

    return promisse;
}

function checkStatusGame() {

    let hasTied = isTiedGame();
    let who = controls.playerTurn;

    if (controls.isGameOver) {
        setTimeout(() => {

            updateScore(who)
            gameOverSound.play();

            setTimeout(() => {
                resetGame();
                return;
            }, 160);
        }, 650)
    } else if (hasTied) {
        setTimeout(() => {

            gameOverSound.play();

            setTimeout(() => {
                resetGame();
                return;
            }, 160);
        }, 650)
    } else {
        return false;
    }
}

function updateScore(player) {

    player === 0 ? controls.score[0]++ : controls.score[1]++;

    playerX.innerHTML = controls.score[0];
    playerO.innerHTML = controls.score[1];
}