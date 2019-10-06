/****************************
 SET UP: VARIABLES, FUNCTIONS 
 ****************************/

// Word Container
var wordContainer = [
    "bat",
    "bewitching",
    "bloody",
    "bones",
    "broom",
    "candy",
    "cemetery",
    "coffin",
    "costume",
    "creaking",
    "creepy",
    "curse",
    "devil",
    "dracula",
    "eerie",
    "fear",
    "foggy",
    "frankenstein",
    "frightened",
    "ghost",
    "goosebumps",
    "grotesque",
    "haunting",
    "howl",
    "lantern",
    "magic",
    "mask",
    "monster",
    "mummy",
    "mysterious",
    "nightmare",
    "noise",
    "petrified",
    "phantom",
    "potion",
    "prank",
    "pumpkin",
    "quiver",
    "scary",
    "scream",
    "shiver",
    "shriek",
    "skeleton",
    "skull",
    "sorcerer",
    "spell",
    "spider",
    "spiderweb",
    "spooky",
    "supernatural",
    "superstition",
    "terror",
    "tomb",
    "torture",
    "twilight",
    "vampire",
    "voodoo",
    "weird",
    "whisper",
    "wicked",
    "witch",
    "witchcraft",
    "wizard",
    "wolf",
    "zombie"
];

// Word Randomly Chosen by Computer
var randomWord = "";
var randomWordLetters = [];
// Underscores Needed
var underscores = 0;
// Player Guess
var playerGuess = "";
// Player's Guessed Letters
var rightLetters = [];
// Player's Wrong Guesses
var wrongLetters = [];
// Remaining Guesses
var remainingGuesses = 12;
// Win Counter
var wins = 0;
// Losses Counter
var losses = 0;

// Word Randomly Chosen by Computer
function chooseWord() {
    // Let Computer Randomly Select a Word
    randomWord = wordContainer[Math.floor(Math.random() * wordContainer.length)];
    // split() "Slices" Word Into Individual Letters
    randomWordLetters = randomWord.split("");
    // How Many Underscores to Display
    underscores = randomWord.length;
}

// Display Underscores With .push()
function showUnderscores() {
    for (var i = 0; i < underscores; i++) {
        rightLetters.push("_");
    }
}

// Compare Entered Letter With Letters in Word - Is It a Correct Letter?
function correctLetter(letterNeeded) {
    var letterCorrect = false;
    for (var i = 0; i < underscores; i++) {
        if (randomWord[i] == letterNeeded) {
            letterCorrect = true;
        }
    }
    if (letterCorrect) {
        for (var i = 0; i < underscores; i++) {
            if (randomWord[i] == letterNeeded) {
                rightLetters[i] = letterNeeded;
            }
        }
    } else {
        wrongLetters.push(playerGuess);
        remainingGuesses--;
    }
}

// Restart Game After Win or Loss
function resetVars() {
    rightLetters = [];
    wrongLetters = [];
    remainingGuesses = 12;
}

// Function to store wins, losses and end game
function endGame() {
    document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
    document.getElementById("guessWord").innerHTML = rightLetters.toString();
    document.getElementById("guesses").innerHTML = wrongLetters.toString();
    // Did Player Win or Lose?
    if (randomWordLetters.toString() == rightLetters.toString()) {
        wins++;
        alert("Winner!!!");
        document.getElementById("wins").innerHTML = wins;
        play();
    } else if (remainingGuesses == 0) {
        losses++;
        alert("Game Over");
        document.getElementById("losses").innerHTML = losses;
        play();
    };
}

/****************************
 GAME CODE
 ****************************/
play();

// Player Enters Letters
document.onkeyup = function (event) {
    playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    correctLetter(playerGuess);
    endGame();
};

// What Happens When Game is Started?
function play() {

    chooseWord();

    resetVars();

    showUnderscores();

    // Display Code in HTML - Use document. and .innerHTML
    document.getElementById("guessWord").innerHTML = rightLetters;
    document.getElementById("guesses").innerHTML = wrongLetters;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}