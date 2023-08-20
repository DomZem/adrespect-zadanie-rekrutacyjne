const previousSlideButton = document.querySelector('.previousSlideButton');
const nextSlideButton = document.querySelector('.nextSlideButton');

let slideIndex = 1;

const showSlides = (n) => {
	const slides = document.querySelectorAll('.slide');

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	slides.forEach((slide) => (slide.style.display = 'none'));

	slides[slideIndex - 1].style.display = 'flex';
};

// Next/previous controls
const plusSlides = (n) => {
	showSlides((slideIndex += n));
};

previousSlideButton.addEventListener('click', () => plusSlides(-1));
nextSlideButton.addEventListener('click', () => plusSlides(1));

showSlides(slideIndex);
