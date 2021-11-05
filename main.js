
// 두 값 사이에 정수 난수 생성하기
function getRandomInteger(max, min) {
  const maximum = Math.floor(max);
  const minimum = Math.ceil(min);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
const summitBtn = document.querySelector('.guess__btn');
const randomNumber = getRandomInteger(101, 1);
const summitInput = document.querySelector('.guess__input');
const resultPhrase = document.querySelector('.last__result');
const hint = document.querySelector('.user--hint');
const preViousGuess = document.querySelector('.user__guess');
const restartBtn = document.querySelector('.restart__btn');



summitBtn.addEventListener("click", () => {

  const guessInputText = summitInput.value;
  console.log(typeof preViousGuess.innerText);
  preViousGuess.innerText = preViousGuess.innerText + " " + guessInputText;
  summitInput.value = null;
  hint.style.display = "block";

  if (guessInputText < randomNumber) {
    hint.innerText = "Last guess was too low!";
  }
  else if (guessInputText > randomNumber) {
    hint.innerText = "Last guess was too high!";
  } else {
    userGuessCorrect();
  }




});


// 새게임 시작 버튼
restartBtn.addEventListener("click", () => {
  location.reload()
});

function userGuessCorrect() {
  resultPhrase.style.backgroundColor = "green";
  resultPhrase.innerText = "정답입니다.";
  hint.style.display = "none";
  restartBtn.style.display = "block";
  summitDisabled();
}

function gameOver() {
  resultPhrase.style.backgroundColor = "#d18063";
  resultPhrase.innerText = "Game Over!!!";
  summitDisabled();
}
function summitDisabled() {
  summitInput.disabled = true;
  summitBtn.disabled = true;
}

// function countUserTurn(count) {
//   count = count + 1;
//   console.log(count);
// }

