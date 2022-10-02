let counterValue;
const valueRef = document.querySelector("#value");
counterValue = valueRef.textContent;

function changeCounterValue(num) {
  valueRef.textContent = num;
  counterValue = valueRef.textContent;
}

const decrRef = document.querySelector('button[data-action="decrement"]');
const incrRef = document.querySelector('button[data-action="increment"]');

decrRef.addEventListener("click", () => {
  let counterValueNum = Number(counterValue);
  counterValueNum -= 1;
  counterValue = String(counterValueNum);
  valueRef.textContent = counterValue;
  return valueRef.textContent;
});

incrRef.addEventListener("click", () => {
  let counterValueNum = Number(counterValue);
  counterValueNum += 1;
  counterValue = String(counterValueNum);
  valueRef.textContent = counterValue;
  return valueRef.textContent;
});

changeCounterValue(9);
