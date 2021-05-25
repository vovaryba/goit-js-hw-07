const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onInputRangeChange);

function onInputRangeChange() {
	span.style.fontSize = `${input.value}px`;
}