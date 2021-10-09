// Controller - MVC pattern

document.addEventListener('DOMContentLoaded', () => {

    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    })
})

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetGame);

function handleClick(event) {

    let cell = event.target;
    let position = cell.getAttribute('id');

    handleMove(position);
    insertSymbolOnBoard();
    toggleBoardHoverSymbol();

}

// Function on being called, put X or O when clicking on a cell 

function insertSymbolOnBoard() {

    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {

        let position = cell.getAttribute('id');
        let flag = board[position];

        if (flag != '') {
            cell.classList.add(flag);
        }
    })
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