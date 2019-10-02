# Word-Guess-Game

- Watch the demo.
- Choose a theme for your game!
- Use key events to listen for the letters that your players will type.

- Display the following on the page:
  Press any key to get started!
  Wins: (# of times user guessed the word correctly).
- If the word is madonna, display it like this when the game starts: \_ \_ \_ \_ \_ \_ \_.
- As the user guesses the correct letters, reveal them: m a d o \_ \_ a.
  Number of Guesses Remaining: (# of guesses remaining for the user).
  Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
  After the user wins/loses the game should automatically choose another word and make the user play it.

BONUS:

- Play a sound or song when the user guesses their word correctly, like in our demo.
- Write some stylish CSS rules to make a design that fits your game's theme.

HARD MODE:

- Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
- Save your whole game and its properties in an object.
- Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
- Don't forget to place your global variables and functions above your object.

Remember: global variables, then objects, then calls.

// PSEUDOCODE

- declare global arrays:
-     var lettersWord []
-     var lettersGuessed []
- function: guessedLetter(userGuess)
-     loop through lettersWord [] to see if letters match
-     if userGuess === lettersWord, change lettersWord
-     add correctly guessed letter to screen, praise user
-     if word is complete, display winner message and wins++
