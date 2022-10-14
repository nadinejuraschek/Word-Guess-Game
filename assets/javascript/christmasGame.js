/****************************
 SET UP: VARIABLES, FUNCTIONS 
 ****************************/

// Word Container
var wordContainer = [
  'angel',
  'bells',
  'bliszzard',
  'candle',
  'carolers',
  'candy',
  'celebrate',
  'ceremony',
  'chestnuts',
  'chimney',
  'cider',
  'cold',
  'cookie',
  'decorate',
  'eggnog',
  'elf',
  'eve',
  'family',
  'feast',
  'festive',
  'frosty',
  'garland',
  'gift',
  'gingerbread',
  'holiday',
  'holly',
  'icicle',
  'jingle',
  'jolly',
  'lights',
  'merry',
  'mistletoe',
  'nutcracker',
  'ornaments',
  'pinecone',
  'poinsettia',
  'presents',
  'receive',
  'reindeer',
  'ribbon',
  'santa',
  'scarf',
  'scrooge',
  'season',
  'sleigh',
  'snow',
  'snowball',
  'snowflake',
  'snowman',
  'socks',
  'star',
  'stocking',
  'sugarplum',
  'tinsel',
  'tradition',
  'tree',
  'unwrap',
  'vacation',
  'winter',
  'wintertime',
  'wish',
  'wonder',
  'wrap',
  'wreath',
];

// Word Randomly Chosen by Computer
var randomWord = '';
var randomWordLetters = [];
// Underscores Needed
var underscores = 0;
// Player Guess
var playerGuess = '';
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
  randomWordLetters = randomWord.split('');
  // How Many Underscores to Display
  underscores = randomWord.length;
}

// Display Underscores With .push()
function showUnderscores() {
  for (var i = 0; i < underscores; i++) {
    rightLetters.push('_');
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
  document.getElementById('guessesRemaining').innerHTML = remainingGuesses;
  document.getElementById('guessWord').innerHTML = rightLetters.join(' ');
  document.getElementById('guesses').innerHTML = wrongLetters.toString();
  // Did Player Win or Lose?
  if (randomWordLetters.toString() == rightLetters.toString()) {
    wins++;
    alert('Winner!!!');
    document.getElementById('wins').innerHTML = wins;
    play();
  } else if (remainingGuesses == 0) {
    losses++;
    alert('Game Over');
    document.getElementById('losses').innerHTML = losses;
    play();
  }
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
  document.getElementById('guessWord').innerHTML = rightLetters.join(' ');
  document.getElementById('guesses').innerHTML = wrongLetters;
  document.getElementById('wins').innerHTML = wins;
  document.getElementById('losses').innerHTML = losses;
}

/****************************
 FOOTER: CURRENT YEAR
 ****************************/
var currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;
