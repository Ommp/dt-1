const start_button = document.getElementById("start");
const submit_guess = document.getElementById("submit-guess");

const guess_result = document.getElementById("guess-result");

let actual_number;

let guesses = [];

function startGame() {

    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    actual_number = Math.floor(Math.random() * (max - min) ) + min;

    guesses = [];
    document.getElementById("guesses").innerHTML = "";
}

function processGuess() {
    let guess = parseInt(document.getElementById("guessed_number").value);
    guesses.push(guess);

    if (guess > actual_number) {
        guess_result.innerHTML = "Too high!";
    } else if (guess < actual_number) {
         guess_result.innerHTML = "Too low!";
    } else if (guess === actual_number) {
        guess_result.innerHTML = "Correct!";
    }
    
    const li_node = document.createElement("li");
    const guess_node = document.createTextNode(guess);
    li_node.appendChild(guess_node);
    document.getElementById("guesses").appendChild(li_node);
}

submit_guess.addEventListener("click", function() {
    processGuess();
})

start_button.addEventListener("click", function() {
    startGame();
});
