const handleScroll = (event) => {
	event.preventDefault();
};

const disableScroll = () => {
	window.addEventListener('wheel', handleScroll, { passive: false });
	window.addEventListener('touchmove', handleScroll, { passive: false });
};

const enableScroll = () => {
	window.removeEventListener('wheel', handleScroll);
	window.removeEventListener('touchmove', handleScroll);
};
