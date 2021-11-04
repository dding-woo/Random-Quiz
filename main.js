const summitBtn = document.querySelector('.guess__btn');


// 두 값 사이에 정수 난수 생성하기
function getRandomInteger(max, min) {
  const maxim = Math.floor(max);
  const minium = Math.ceil(min);
  return Math.floor(Math.random() * (maxim - minium) + minium);
}
console.log(getRandomInteger(100, 1));

summitBtn.addEventListener("click", () => {
  const summitInput = document.querySelector('.guess__input');
  let guessInputText = summitInput.value;
  alert(guessInputText);
  summitInput.value = null;

  // Math.random 함수 난수반환.

});