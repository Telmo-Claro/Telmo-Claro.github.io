// Main JavaScript file for the portfolio website

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function ()
{
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    {
        anchor.addEventListener('click', function (e)
        {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target)
            {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation classes to elements when they come into view
    const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach(entry =>
        {
            if (entry.isIntersecting)
            {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements with animation classes
    document.querySelectorAll('.animate-fade-in').forEach(element =>
    {
        observer.observe(element);
    });

    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton && navLinks)
    {
        menuButton.addEventListener('click', () =>
        {
            navLinks.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm)
    {
        contactForm.addEventListener('submit', function (e)
        {
            e.preventDefault();

            // Basic form validation
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            if (!name || !email || !message)
            {
                alert('Please fill in all fields');
                return;
            }

            if (!isValidEmail(email))
            {
                alert('Please enter a valid email address');
                return;
            }

            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

// Email validation helper function
function isValidEmail(email)
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add active class to current navigation item
document.addEventListener('DOMContentLoaded', function ()
{
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link =>
    {
        if (link.getAttribute('href') === currentPath)
        {
            link.classList.add('active');
        }
    });
});

// Tic Tac Toe game functionality
if (document.querySelector('#game-container'))
{
    document.addEventListener('DOMContentLoaded', function ()
    {
        const board = document.getElementById('board');
        const scoreX = document.getElementById('score-x');
        const scoreO = document.getElementById('score-o');
        const resetButton = document.getElementById('reset');
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let scores = { X: 0, O: 0 };
        let gameActive = true;

        // Create board cells
        for (let i = 0; i < 9; i++)
        {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        }

        function handleCellClick(e)
        {
            const cell = e.target;
            const index = parseInt(cell.dataset.index);

            if (gameBoard[index] !== '' || !gameActive) return;

            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer.toLowerCase());

            if (checkWin())
            {
                scores[currentPlayer]++;
                updateScore();
                gameActive = false;
                return;
            }

            if (checkDraw())
            {
                gameActive = false;
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        function checkWin()
        {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            return winPatterns.some(pattern =>
            {
                const [a, b, c] = pattern;
                return gameBoard[a] &&
                    gameBoard[a] === gameBoard[b] &&
                    gameBoard[a] === gameBoard[c];
            });
        }

        function checkDraw()
        {
            return gameBoard.every(cell => cell !== '');
        }

        function updateScore()
        {
            scoreX.textContent = scores.X;
            scoreO.textContent = scores.O;
        }

        function resetGame()
        {
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            gameActive = true;
            document.querySelectorAll('.cell').forEach(cell =>
            {
                cell.textContent = '';
                cell.classList.remove('x', 'o');
            });
        }

        resetButton.addEventListener('click', resetGame);
    });
} 