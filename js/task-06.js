const input = document.querySelector('#validation-input');
const dataLength = Number(input.getAttribute('data-length'));
input.style.border = '3px solid #bdbdbd';

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
	if (input.value.length === dataLength) {
		input.classList.remove('invalid');
		input.classList.add('valid');
		const inputTrue = document.querySelector('#validation-input.valid');
		inputTrue.style.borderColor = '#4caf50';
	} else {
		input.classList.remove('valid');
		input.classList.add('invalid');
		const inputTrue = document.querySelector('#validation-input.invalid');
		inputTrue.style.borderColor = '#f44336';
	}
}