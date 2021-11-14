'use strict';

let randomNum = document.querySelector('.number');
let buttonAgain = document.querySelector('.again');
let buttonCheck = document.querySelector('.check');
let guess = document.querySelector('.guess');
let msg = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

let randomFinNum = Math.round(Math.random() * 19 + 1);
console.log(randomFinNum);
let scoreCount = 20;
let highScr = 0;

function scoreCountFunc() {
  if (scoreCount > 1) {
    scoreCount--;
    score.textContent = scoreCount;
    msg.textContent = guess.value < randomFinNum ? 'To Low' : 'To High';
  } else {
    msg.textContent = 'Yor are lost';
    score.textContent = 0;
  }
}

buttonCheck.addEventListener('click', function () {
  if (!guess.value || guess.value == 0) {
    msg.textContent = "It's not a number";
  } else if (guess.value == randomFinNum) {
    msg.textContent = 'Winner';
    randomNum.textContent = randomFinNum;
    document.body.style.background = 'green';
    randomNum.style.width = '20rem';
    //highscore
    if (highScr < scoreCount) {
      highScr = scoreCount;
      highscore.textContent = highScr;
    }
  } else {
    scoreCountFunc();
  }
});

//reset game (again button)
buttonAgain.addEventListener('click', function () {
  score.textContent = 20;
  scoreCount = 20;
  randomFinNum = Math.round(Math.random() * 19 + 1);
  console.log(randomFinNum);
  guess.value = '';
  msg.textContent = 'Start guessing...';
  document.body.removeAttribute('style');
  randomNum.removeAttribute('style');
  randomNum.textContent = '?';
});

//I need to know If we have an option to use a function as condition in if/else statement
