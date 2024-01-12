const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".element");
const remainingGuessesDisplay = document.querySelector(".display");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again-button");

const word = "magnolia";
const guessedLettersElement = [];
let remainingGuesses = 8;

const getWord = asnyc function () {
   const response = await fetch("https//gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
   const words = await response.text();
   const wordArray = words.split("\n");
   const randomIndex = Math.floor(Math.random() * wordArray.lemgth);
   word = wordArray[randomIndex].trim();
   placeholder(word);
};


getWord();


const placeholder = function placeholder(word) {
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

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessLetters();
        updateWordInProgress(guessedLetters);
    }
};

const showGuessLetters = function () {
    //clear the list first
    guessedLetters.innerHTML = "";
    for (const letter of guessedLettersElement) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetters.append(li);
    }
};

const updateWordInProgress = function (guessedLettersElement) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLettersElement.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("@");
        }
    }
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

const updateGuessesRemaining =function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        //oh no - bad guess, lose a chance
        message.innerText = `Sorry the word has no $(guess).`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Good guess! The word has the letter $(guess).`;
    }

    if (remainingGuesses === 0){
        message.innerHTML = `Game over! The word was <span class="highlight">$(word)</span>.`;
    } else if (remainingGuesses === 1) {
        remainingGuessesDisplay.innerText = `${remainingGuesses} guess`;
    } else {
        remainingGuessesDisplay.innerText = `${remainingGuesses} guesses`;
    }
};

const checkIfWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};