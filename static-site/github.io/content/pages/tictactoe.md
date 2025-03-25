Title: Tic Tac Toe
Date: 2025-03-25
Template: tictactoe
Slug: tictactoe
Save_as: tictactoe.html

# Tic Tac Toe Game

Welcome to my interactive Tic Tac Toe game! Challenge yourself or play with a friend in this classic game of strategy.

## How to Play
1. The game is played on a 3x3 grid
2. Players take turns placing their mark (X or O) in an empty square
3. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
4. If all squares are filled and no player has won, the game is a draw

## Features
- Clean, minimalist design
- Score tracking
- Visual feedback for winning combinations
- Responsive layout that works on all devices

<div id="game-container">
    <div id="score">
        <span>Player X: <span id="score-x">0</span></span>
        <span>Player O: <span id="score-o">0</span></span>
    </div>
    <div id="board"></div>
    <button id="reset">New Game</button>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const scoreX = document.getElementById('score-x');
    const scoreO = document.getElementById('score-o');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let scores = { X: 0, O: 0 };
    let gameActive = true;

    // Create board cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }

    function handleCellClick(e) {
        const cell = e.target;
        const index = parseInt(cell.dataset.index);

        if (gameBoard[index] !== '' || !gameActive) return;

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());

        if (checkWin()) {
            scores[currentPlayer]++;
            updateScore();
            gameActive = false;
            return;
        }

        if (checkDraw()) {
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return gameBoard[a] && 
                   gameBoard[a] === gameBoard[b] && 
                   gameBoard[a] === gameBoard[c];
        });
    }

    function checkDraw() {
        return gameBoard.every(cell => cell !== '');
    }

    function updateScore() {
        scoreX.textContent = scores.X;
        scoreO.textContent = scores.O;
    }

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        document.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
    }

    resetButton.addEventListener('click', resetGame);
});
</script>

<style>
#game-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

#score {
    margin-bottom: 20px;
    font-size: 1.2em;
}

#score span {
    margin: 0 10px;
}

#board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 20px auto;
    max-width: 300px;
}

.cell {
    aspect-ratio: 1;
    background: #f5f5f5;
    border: 2px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cell:hover {
    background: #e0e0e0;
}

.cell.x {
    color: #e74c3c;
}

.cell.o {
    color: #3498db;
}

#reset {
    padding: 10px 20px;
    font-size: 1.1em;
    background: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#reset:hover {
    background: #444;
}
</style> 