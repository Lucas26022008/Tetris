// Array com as cores das peças
const colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6'];

// Array para armazenar as peças no tabuleiro
let pieces = [];

// Função para criar as peças
function createPieces() {
    const gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';

    for (let i = 0; i < 64; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.dataset.index = i;
        piece.addEventListener('click', matchPieces);
        gameBoard.appendChild(piece);
        pieces.push(piece);
    }
}

// Função para verificar se há um match de 3 peças
function matchPieces() {
    // Lógica para verificar se há um match de 3 peças
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    pieces = [];
    createPieces();
}

// Chamar a função para criar as peças no início
createPieces();

// Botão de reiniciar
document.getElementById('b-reiniciar').addEventListener('click', reiniciarJogo);