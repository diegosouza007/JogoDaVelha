const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

document.addEventListener('DOMContentLoaded', () => {

    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let cell = event.target;
    let position = cell.getAttribute('id');

    if (controls.isGameOver) {
        return;
    }

    handleMove(position);
    insertSymbolOnBoard();
    toggleBoardHoverSymbol();

    if (gameMode === 'pve') {
        playBotTurn();
    }
}

// Function on being called, put X or O when clicking on a cell 


function insertSymbolOnBoard() {

    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {

        let position = cell.getAttribute('id');
        let flag = controls.board[position];

        if (flag != '') {
            cell.classList.add(flag);
        }
    })

    controls.isGameOver = isWinner();


    if (isTiedGame()) {
        setTimeout(() => { resetGame(); }, 2000);
    }


}

// Switch between X or O the hover effect in the cells 


function toggleBoardHoverSymbol() {

    let board = document.querySelector('.board');

    if (board.classList.contains('x')) {
        board.classList.remove('x');
        board.classList.add('o');
    } else {
        board.classList.remove('o');
        board.classList.add('x');
    }
}

// Clear all cells and start a new game


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

    clearVariables();
}

// Check if there is a winner


function isWinner() {

    for (let i = 0; i < winnerSequences.length; i++) {

        let number = winnerSequences[i];

        let firstNumber = number[0];
        let secondNumber = number[1];
        let thirdNumber = number[2];

        if (controls.board[firstNumber] == controls.board[secondNumber] &&
            controls.board[firstNumber] == controls.board[thirdNumber] &&
            controls.board[firstNumber] != '') {
            setTimeout(() => {
                alert(`O vencedor foi ${controls.board[firstNumber]}`)
            }, 100);
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
    return true;
}


// ---------------- BOT FUNCTIONS ---------------- //


function playBotTurn() {

    let position = getRandomNumber();

    setTimeout(() => {

        if (controls.isGameOver) {
            return;
        }

        handleMove(position);
        insertSymbolOnBoard();
        toggleBoardHoverSymbol();
    }, 1000);

    // return true;
}

/** Receive the variable board and return a random positon according
 *          with the empty postions avaible in array
 **/

let getRandomNumber = function() {

    let pos = '';
    let num = '';
    let emptyPos = '';
    let newArr =


        controls.board.map((value, index) => {
            if (value === '') {
                emptyPos += index;
            };
        })

    newArr = Array.from(emptyPos);

    pos = Math.floor(Math.random() * newArr.length);

    num = newArr[pos];

    return num;
}