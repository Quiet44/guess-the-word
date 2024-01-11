const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".element");
const remainingGuessesDisplay = document.querySelector(".display");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again-button");

const word = "magnolia";

const placeholder =function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("@");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
