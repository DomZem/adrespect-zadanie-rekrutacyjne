const mobileDropdownMenuBtn = document.querySelector('.mobile-dropdown-menu-button');
const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');

const desktopDropdownMenuBtn = document.querySelector('.desktop-dropdown-menu-button');
const desktopDropdownMenu = document.querySelector('.desktop-dropdown-menu');

mobileDropdownMenuBtn.addEventListener('click', () => {
	mobileDropdownMenu.classList.toggle('hidden');
});

desktopDropdownMenuBtn.addEventListener('click', () => {
	desktopDropdownMenu.classList.toggle('hidden');
});
