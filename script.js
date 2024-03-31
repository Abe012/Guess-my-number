'use strict';
let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const quess = Number(document.querySelector('.guess').value);
  if (!quess) {
    displayMessage('🤷‍♂️ Not a number');
  } else if (quess !== secretNumber) {
    if (score > 1) {
      displayMessage(quess > secretNumber ? '📈 Too high' : '📉 Too low');
      document.querySelector('.score').textContent = score - 1;
      score--;
    } else {
      displayMessage('😭 You Lost');
      document.querySelector('.score').textContent = 0;
    }
  } else if (quess === secretNumber) {
    displayMessage('🎉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
});
