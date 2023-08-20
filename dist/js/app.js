const hamburgerBtn = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

const searchInputBtn = document.querySelector('.search-input-button');
const searchInput = document.querySelector('.search-input');

hamburgerBtn.addEventListener('click', (event) => {
	event.currentTarget.classList.toggle('hamburger-button-is-active');
	mobileMenu.classList.toggle('-translate-x-full');
});

searchInputBtn.addEventListener('click', () => {
	searchInput.classList.toggle('hidden');
});
