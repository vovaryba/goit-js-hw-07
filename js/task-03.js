const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEl = document.querySelector('#gallery');
const imagesGallery = images.map(image => {
	return `<li><img src ='${image.url}' alt ='${image.alt}' ></li>`;
}).join('');
galleryEl.insertAdjacentHTML("beforeend", imagesGallery);

galleryEl.style.display = 'flex';
galleryEl.style.justifyContent = 'space-evenly';
galleryEl.style.alignItems = 'center';
galleryEl.style.listStyleType = 'none';

const imgEl = document.querySelectorAll('img');
imgEl.forEach(element => {
	element.style.width = '240px';
});
// const createPicturesGallery = options => {
// 	return options.map(option => {
// 		const imgEl = document.createElement('img');
// 		const liEl = document.createElement('li');
// 		liEl.appendChild(imgEl)
// 		imgEl.src = option.url;
// 		imgEl.alt = option.alt;
// 		console.log(imgEl);
// 		return liEl;
// 	});
// };
// const elements = createPicturesGallery(images);
// galleryEl.append(...elements);
