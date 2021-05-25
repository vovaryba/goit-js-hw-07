const divEl = document.querySelector('#counter');
const decrementBtn = divEl.firstElementChild;
const incrementBtn = divEl.lastElementChild;
const spanEl = document.querySelector('#value');
let counterValue = Number(spanEl.textContent);

decrementBtn.addEventListener('click', onDecrementButtonClick);
incrementBtn.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
	counterValue -= 1;
	return spanEl.textContent = counterValue;
}
function onIncrementButtonClick() {
	counterValue += 1;
	return spanEl.textContent = counterValue;
}
