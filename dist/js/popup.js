const masonryCon = document.getElementById('masonry-grid');

const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');

// Buttons
const popupCloseBtn = document.getElementById('popup-close-btn');
const previousPopupImageBtn = document.getElementById('previous-popup-image-btn');
const nextPopupImageBtn = document.getElementById('next-popup-image-btn');

const IMG_URL = './assets/img/garden';

const getImageNumber = (imageSrc) => {
	return imageSrc.match(/-(\d+)/)[1];
};

const showImage = (n) => {
	const currentImgNumber = getImageNumber(popupImage.src);
	let nextImgNumber = parseInt(currentImgNumber) + n;

	if (nextImgNumber < 1) {
		nextImgNumber = 1;
	}

	if (nextImgNumber > 9) {
		nextImgNumber = 9;
	}

	popupImage.src = `${IMG_URL}/garden-${nextImgNumber}.jpg`;
};

masonryCon.addEventListener('click', (e) => {
	const clickedElement = e.target;

	if (clickedElement.tagName === 'IMG' && clickedElement.parentElement.classList.contains('grid-item')) {
		popupImage.src = clickedElement.src;
		popup.classList.remove('hidden');
		disableScroll();
	}
});

popupCloseBtn.addEventListener('click', () => {
	popup.classList.add('hidden');
	enableScroll();
});

previousPopupImageBtn.addEventListener('click', () => showImage(-1));
nextPopupImageBtn.addEventListener('click', () => showImage(1));
