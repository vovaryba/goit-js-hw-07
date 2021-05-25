const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`В списке ${numberOfCategories} категории.`);

const arrayItems = [...document.querySelector("#categories").children];
arrayItems.forEach((item) => {
	const titleElem = item.querySelector('.item > h2').textContent;
	console.log(`Категория: ${titleElem}`);
	const amountElem = item.querySelectorAll('li').length;
	console.log(`Количество элементов: ${amountElem}`);
});