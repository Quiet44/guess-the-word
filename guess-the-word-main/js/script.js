const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".element");
const remainingGuessesDisplay = document.querySelector(".display");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again-button");

const word = "magnolia";
const guessedLetters = [];

const placeholder =function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("@");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Let's grab what was entered in the input
    const guess = letterInput.value;
    //Let's make sure that it is a single letter
    const goodGuess = validateInpute(guess);

 if (goodGuess) {
    // We've got a letter! Let's guess!
    makeGuess(guess);
 }
});
const validateInpute =function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length ===0) {
        // Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (input.match(acceptedLetter)) {
        // Did you type a number, a special character or some other non letter thing?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        // We finnally got a single letter, omg yay
        return input;
    }
};