const refs = {
	input: document.querySelector('#name-input'),
	nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);
console.log(refs.input);

function onInputChange(event) {
	if (refs.input.value === '') {
		refs.nameLabel.textContent = 'незнакомец';
	}
	else {
		refs.nameLabel.textContent = event.currentTarget.value;
	}
}