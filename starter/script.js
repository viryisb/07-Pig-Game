'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.bton--hold');

//Create "hidden" class in CSS

//starting conditions:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generating a random dice roll
  //The const dice has to be here because we do not want a global variable. We want to generate a new random number every time we press the button

  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceEl.classList.remove('hidden');
  //we pass in dice.src as a string. Dice is a number. It is going to take the src as a string and select the png by number
  diceEl.src = `dice-${dice}.png`;

  //check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
