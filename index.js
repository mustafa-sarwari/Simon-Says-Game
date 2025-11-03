/**
 * DOM SELECTORS
 * These constants reference DOM elements used throughout the game
 */

// Audio file paths for each pad sound
const sound1 = "./assets/simon-says-sound-1.mp3";
const sound2 = "./assets/simon-says-sound-2.mp3";
const sound3 = "./assets/simon-says-sound-3.mp3";
const sound4 = "./assets/simon-says-sound-4.mp3";

// Game UI elements
const startButton = document.querySelector(".js-start-button");
const statusSpan = document.querySelector(".js-status");
const heading = document.querySelector(".js-heading");
const padContainer = document.querySelector(".js-pad-container");

/**
 * GAME STATE VARIABLES
 * These variables track the current state of the game
 */
let computerSequence = []; // Computer-generated sequence of pad presses
let playerSequence = []; // Player's sequence of pad presses
let maxRoundCount = 0; // Maximum number of rounds for the current difficulty level
let roundCount = 0; // Current round number

/**
 * GAME PAD CONFIGURATION
 * Array of pad objects containing color, DOM selector, and audio
 * Each pad has a unique color, sound, and DOM reference
 */
const pads = [
  {
    color: "red",
    selector: document.querySelector(".js-pad-red"),
    sound: new Audio(sound1),
  },
  {
    color: "green",
    selector: document.querySelector(".js-pad-green"),
    sound: new Audio(sound2),
  },
  {
    color: "blue",
    selector: document.querySelector(".js-pad-blue"),
    sound: new Audio(sound3),
  },
  {
    color: "yellow",
    selector: document.querySelector(".js-pad-yellow"),
    sound: new Audio(sound4),
  }
];

/**
 * EVENT LISTENERS
 * Set up event handlers for user interactions
 */
padContainer.addEventListener("click", padHandler);
startButton.addEventListener("click", startButtonHandler);
/**
 * EVENT HANDLERS
 */

/**
 * Handles the start button click event
 * Initializes the game and begins the first round
 * @returns {Object} Object containing startButton and statusSpan references
 */
function startButtonHandler() {
  maxRoundCount = setLevel();
  roundCount = 1;
  playComputerTurn();
  startButton.classList.add("hidden");
  statusSpan.classList.remove("hidden");
  return { startButton, statusSpan };
}

/**
 * Handles pad click events during player's turn
 * Plays the pad sound and validates the player's choice
 * @param {Event} event - The click event object
 * @returns {string|undefined} The color of the clicked pad, or undefined if no valid pad was clicked
 */
function padHandler(event) {
  const { color } = event.target.dataset;
  if (!color) return;
  
  const pad = pads.find(pad => pad.color === color);
  pad.sound.play();
  checkPress(color);
  return color;
}

/**
 * HELPER FUNCTIONS
 */

/**
 * Sets the difficulty level of the game
 * @param {number} level - The difficulty level (1-4), defaults to 1
 * @returns {number|string} Number of rounds for valid level, or error message for invalid level
 * 
 * Difficulty levels:
 * - Level 1: 8 rounds
 * - Level 2: 14 rounds
 * - Level 3: 20 rounds
 * - Level 4: 31 rounds
 */
function setLevel(level = 1) {
  if (level === 1) return 8;
  if (level === 2) return 14;
  if (level === 3) return 20;
  if (level === 4) return 31;
  return "Please enter level 1, 2, 3, or 4";
}


/**
 * Returns a randomly selected item from an array
 * @param {Array} collection - The array to select from
 * @returns {*} A random item from the collection, or null if collection is empty
 */
function getRandomItem(collection) {
  if (collection.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

/**
 * Sets the text content of a DOM element
 * @param {HTMLElement} element - The DOM element to update
 * @param {string} text - The text to set
 * @returns {HTMLElement} The updated element
 */
function setText(element, text) {
  element.textContent = text;
  return element;
}

/**
 * Activates a pad with visual and audio feedback
 * Adds the "activated" class for 500ms and plays the pad's sound
 * @param {string} color - The color of the pad to activate ("red", "green", "blue", or "yellow")
 */
function activatePad(color) {
  const pad = pads.find((pad1) => pad1.color === color);
  pad.selector.classList.add("activated");
  pad.sound.play();
  setTimeout(() => {
    pad.selector.classList.remove("activated");
  }, 500);
}

/**
 * Activates a sequence of pads with timed delays
 * Each pad is activated 600ms after the previous one
 * @param {string[]} sequence - Array of color strings representing the sequence
 */
function activatePads(sequence) {
  sequence.forEach((color, index) => { 
    setTimeout(() => {
      activatePad(color);
    }, (index + 1) * 600);
  });
}

/**
 * Allows the computer to play its turn.
 *
 * 1. Add the `"unclickable"` class to `padContainer` to prevent the user from pressing
 * any of the pads
 *
 * 2. The status should display a message that says "The computer's turn..."
 *
 * 3. The heading should display a message that lets the player know how many rounds are left
 * (e.g., "`Round ${roundCount} of ${maxRoundCount}`")
 *
 * 4. Push a randomly selected color into the `computerSequence` array
 *
 * 5. Call `activatePads(computerSequence)` to light up each pad according to order defined in
 * `computerSequence`
 *
 * 6. The playHumanTurn() function needs to be called after the computer’s turn is over, so
 * we need to add a delay and calculate when the computer will be done with the sequence of
 * pad presses. The `setTimeout()` function executes `playHumanTurn(roundCount)` one second
 * after the last pad in the sequence is activated. The total duration of the sequence corresponds
 * to the current round (roundCount) multiplied by 600ms which is the duration for each pad in the
 * sequence.
 */
 function playComputerTurn() {
  // TODO: Write your code here.
  padContainer.classList.add("unclickable")
  
  statusSpan.textContent = "The computer's turn...";
  heading.textContent = `Round ${roundCount} of ${maxRoundCount}`;

  const colors = ["red", "green", "blue", "yellow"];
  const randomColor = getRandomItem(colors);

  computerSequence.push(randomColor);
  activatePads(computerSequence);

  const delay = roundCount * 600 + 1000;
  setTimeout(() => playHumanTurn(), delay); // 5

}
/**
 * Executes the player's turn
 * Enables pad clicking and displays remaining presses
 */
function playHumanTurn() {
  padContainer.classList.remove("unclickable");
  const remainingPresses = computerSequence.length - playerSequence.length;

  setText(statusSpan, `Player remaining presses: ${remainingPresses}`);
}

/**
 * Validates the player's pad selection
 * Checks if the pressed pad matches the computer's sequence
 * @param {string} color - The color of the pad that was pressed
 */
function checkPress(color) {
  playerSequence.push(color);
  const index = playerSequence.length - 1;
  
  if (playerSequence[index] !== computerSequence[index]) {
    resetGame("Wrong pad! Game over. Try again.");
    return;
  }
  
  const remainingPresses = computerSequence.length - playerSequence.length;
  if (remainingPresses === 0) {
    checkRound();
  } else {
    statusSpan.textContent = `Player remaining presses: ${remainingPresses}`;
  }
}

/**
 * Checks if the current round is complete
 * Either advances to the next round or ends the game if all rounds are complete
 */
function checkRound() {
  if (roundCount === maxRoundCount) {
    resetGame("Congratulations! You completed the game!");
  } else {
    roundCount++;
    playerSequence = [];
    setText(statusSpan, "Nice! Keep going!");
    setTimeout(playComputerTurn, 1000);
  }
}

/**
 * Resets the game to initial state
 * Called when the player makes a mistake or completes the game
 * @param {string} text - Message to display to the player
 */
function resetGame(text) {
  computerSequence = [];
  playerSequence = [];
  roundCount = 0;
  
  alert(text);
  setText(heading, "Simon Says");
  startButton.classList.remove("hidden");
  statusSpan.classList.add("hidden");
  padContainer.classList.add("unclickable");
}

/**
 * Please do not modify the code below.
 * Used for testing purposes.
 *
 */

window.statusSpan = statusSpan;
window.heading = heading;
window.padContainer = padContainer;
window.pads = pads;
window.computerSequence = computerSequence;
window.playerSequence = playerSequence;
window.maxRoundCount = maxRoundCount;
window.roundCount = roundCount;
window.startButtonHandler = startButtonHandler;
window.padHandler = padHandler;
window.setLevel = setLevel;
window.getRandomItem = getRandomItem;
window.setText = setText;
window.activatePad = activatePad;
window.activatePads = activatePads;
window.playComputerTurn = playComputerTurn;
window.playHumanTurn = playHumanTurn;
window.checkPress = checkPress;
window.checkRound = checkRound;
window.resetGame = resetGame;