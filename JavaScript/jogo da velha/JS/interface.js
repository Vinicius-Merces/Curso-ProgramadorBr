document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})


function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(" O Jogo Acabou! - O Vencedor foram as" + " " + playerTime);
        }, 20);



        if (playerTime == 0) {
            playerTime = "Abóboras"
        }
        else {
            playerTime = "Caveiras"
        }


    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    // redefine as variáveis relevantes do jogo
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    playerTime = 0;
    symbols = ["o", "x"];

    // redefine o conteúdo das quadrículas para o estado inicial
    resetSquares();
}
function resetSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        // let position = square.id;
        square.innerHTML = `<div class=''></div>`;
    });
}
