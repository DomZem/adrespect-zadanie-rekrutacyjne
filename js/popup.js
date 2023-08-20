const masonryCon = document.getElementById('masonry-grid');

const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');

// Buttons
const popupCloseBtn = document.querySelector('.popup-close-btn');
const previousPopupImageBtn = document.querySelector('.previous-popup-image-btn');
const nextPopupImageBtn = document.querySelector('.next-popup-image-btn');

const getImageNumber = (imageSrc) => {
	return imageSrc.match(/-(\d+)/)[1];
};

const showImage = (n) => {
	const gridItems = document.querySelectorAll('.grid-item');
	const currentImgNumber = getImageNumber(popupImage.src);
	let nextImgNumber = parseInt(currentImgNumber) + n;

	if (nextImgNumber < 1) {
		nextImgNumber = gridItems.length - 1;
	}

	if (nextImgNumber >= gridItems.length) {
		nextImgNumber = 1;
	}

	popupImage.src = `${IMG_URL}/project-${nextImgNumber}.jpg`;
};

masonryCon.addEventListener('click', (e) => {
	const clickedElement = e.target;

	if (clickedElement.tagName === 'IMG' && clickedElement.parentElement.classList.contains('grid-item')) {
		popupImage.src = clickedElement.src;
		popup.classList.remove('hidden');
		popup.classList.add('flex');
		disableScroll();
	}
});

popupCloseBtn.addEventListener('click', () => {
	popup.classList.remove('flex');
	popup.classList.add('hidden');
	enableScroll();
});

previousPopupImageBtn.addEventListener('click', () => showImage(-1));
nextPopupImageBtn.addEventListener('click', () => showImage(1));
