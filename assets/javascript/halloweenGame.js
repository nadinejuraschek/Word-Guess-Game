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
    "whipser",
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

function chooseWord() {
    // Let Computer Randomly Select a Word
    randomWord = wordContainer[Math.floor(Math.random() * wordContainer.length)];
    // split() "Slices" Word Into Individual Letters
    randomWordLetters = randomWord.split("");
    // How Many Underscores to Display
    underscores = randomWord.length;
}

/****************************
 GAME CODE
 ****************************/

// Player Enters Letters
document.onkeyup = function (event) {
    playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    correctLetter(playerGuess);
    endGame();
};