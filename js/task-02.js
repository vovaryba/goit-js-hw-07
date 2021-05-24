const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulEl = document.querySelector('#ingredients');
const listEl = ingredients.map((ingridient) => {
	const liEl = document.createElement('li');
	liEl.textContent = ingridient;
	return liEl;
});
ulEl.append(...listEl);