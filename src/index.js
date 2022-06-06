//Import Files
import Hangman from "./Hangman";
import getPuzzleApi from './requests'

import './styles/style.css'
//--------------------
const puzzleEl = document.querySelector("#puzzle");
const guessEl = document.querySelector("#guesses");
let gameOne = new Hangman("", 0);

puzzleEl.textContent = gameOne.puzzle;
guessEl.textContent = gameOne.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  gameOne.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessEl.textContent = gameOne.statusMessage;

  gameOne.puzzle.split("").forEach((letter)=>{
    const letterEl = document.createElement("span")
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
};

const startGame = async () => {
  const puzzle = await getPuzzleApi();
  gameOne = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
