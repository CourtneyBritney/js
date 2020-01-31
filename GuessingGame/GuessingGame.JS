var secret = Math.floor(Math.random() * 10) + 1;
guessNumber();

function guessNumber() {

    var answer = prompt("please guess the secret number (1-10)");
    //Convert the string guess to an integer so that we can compare
    var guess = parseInt(answer);
    checkGuess(guess);
}

function checkGuess(myGuess) {
    if (myGuess === secret) {
        alert("Congrations your guess was correct!");
    } else if (myGuess < secret) {
        alert("Your guess is not high enough. Please try again!");
        guessNumber();
    } else if (myGuess > secret) {
        alert("Your guess is too high. Please try again.");
        guessNumber();
    } else {
        alert("Invalid input!");
        guessNumber();
    }
}