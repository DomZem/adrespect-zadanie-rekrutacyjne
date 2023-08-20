const previousSlideButton = document.querySelector('.previous-slide-button');
const nextSlideButton = document.querySelector('.next-slide-button');

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
