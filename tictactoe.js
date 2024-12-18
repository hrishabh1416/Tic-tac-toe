let blocks = [
    document.getElementById("block0"),
    document.getElementById("block1"),
    document.getElementById("block2"),
    document.getElementById("block3"),
    document.getElementById("block4"),
    document.getElementById("block5"),
    document.getElementById("block6"),
    document.getElementById("block7"),
    document.getElementById("block8"),
];

let header = document.getElementById("header");
let currentPlayer = "Player 1";
let currentSymbol = "X";

blocks.forEach((block, index) => {
    block.onclick = function () {
        if (block.innerHTML !== "") {
            return; // Prevent overwriting a block that's already filled
        }

        // Set the symbol and style
        block.style.fontSize = "20px";
        block.style.textAlign = "center";
        block.innerHTML = currentSymbol;

        // Check for a win
        if (checkForWin()) {
            header.innerHTML = `${currentPlayer} wins!`;
            disableClicks();
            return;
        }

        // Check for a draw
        if (blocks.every(b => b.innerHTML !== "")) {
            header.innerHTML = "It's a draw!";
            return;
        }

        // Switch players
        currentPlayer = currentPlayer === "Player 1" ? "Player 2" : "Player 1";
        currentSymbol = currentSymbol === "X" ? "O" : "X";
        header.innerHTML = `${currentPlayer}'s turn`;
    };
});

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkForWin() {
    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return (
            blocks[a].innerHTML === currentSymbol &&
            blocks[b].innerHTML === currentSymbol &&
            blocks[c].innerHTML === currentSymbol
        );
    });
}

function disableClicks() {
    blocks.forEach(block => {
        block.onclick = null; // Disable all clicks after a win
    });
}
