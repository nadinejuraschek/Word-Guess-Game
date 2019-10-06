# Word-Guess-Game

## Pseudocode

### store words to guess in an array

- declare var wordContainer[]

### let computer randomly choose word

- needs storage var (empty)
  - declare var randomWord = ""
- set randomWord equal to wordContainer[x]
  - randomWord = wordContainer[Math.floor(Math.random() * wordContainer.length)]
    // Math.floor() returns integer, math.random() returns random number in given scope

### split word to display individual letters and store them in array (empty)

    - declare var randomWordLetters = []
    - set randomWordLetters = randomWord.split("")
      // .split() "slices" content

### define how many underscores are needed = same amount as letters in random word

    - declare var underscores = 0
    - set underscores = randomWord.length

### let player enter letters

- store guess in var (empty)

  - declare var playerGuess = ""

  - define onkeyup event:

  - document.onkeyup = function(event) {
    // make playerGuess a string
    playerGuess = String.fromCharCode()
    // call event
    // MDN: .keyCode = property represents (...)unmodified value of the pressed key
    playerGuess = String.fromCharCode(event.keyCode)
    // make sure entered uppercase letters can be played and are converted to lowercase letters
    add .toLowerCase()
    }

### store all of player's guessed letters / pressed keys

- store in arrays (empty)

  - declare var rightLetters = []
  - declare var wrongLetters = []

### display player's wrong letters

- document.getElementById("guesses").innerHTML = wrongLetters.toString()

### display underscores of randomWord for player

- HTML: add #guessWord

### check if playerGuess is one of the rightLetters

- declare var remainingGuesses = 12
  // lets player have 12 guesses
- declare function correctLetter()
- declare var letterNeeded to pass into correctLetter()
- declare var letterCorrect for condition/loop
- create loop with var underscores, because number of underscores = number of needed letters in word
- define conditions:

  - if letterCorrect = true, display letter
  - if letterCorrect = false, display letter in "guesses" and remainingGuesses--

### display underscores

- define function showUnderscores()

  - create loop
  - use .push("\_")
    // "pushes" underscore in place of letter

### log wins and losses, set conditions for when player loses the game

- declare var wins = 0
- declare var losses = 0
- add #wins and #losses to HTML
- define function endGame() with conditions
  - if (randomWordLetters == rightLetters)
    - wins++
    - document.getElementById("wins").innerHTML = wins
    - alert("Winner!")
  - else if (remainingGuesses == 0)
    - losses++
    - document.getElementById("losses").innerHTML = losses
    - alert("Game Over")
- add function endGame() to onkeyup event

### reset variables for player to replay the game

- var rightLetters = []
- var wrongLetters = []
- var remainingGuesses = 12

### put everything inside a play() function to let player replay the game

### call play() function

- add play() to endGame() function, so that game can restart
