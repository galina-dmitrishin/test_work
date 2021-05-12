const minusNum = document.getElementById('minus-num');
const inputNum = document.getElementById('sum__room-input-1');
const plusNum = document.getElementById('plus-num');
let countNum = 0;

plusNum.addEventListener('click', () => {
  countNum++;
  inputNum.value = countNum;
})
minusNum.addEventListener('click', () => {
  countNum--;
  inputNum.value = countNum;
})