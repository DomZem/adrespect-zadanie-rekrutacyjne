const masonryContainer = document.getElementById('masonry-grid');
const masonryBtn = document.querySelector('.masonry-button');

const msnry = new Masonry(masonryContainer, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	gutter: '.gutter-sizer',
	percentPosition: true,
});

const getItemElement = (index) => {
	const outerDiv = document.createElement('div');
	outerDiv.classList.add('grid-item');

	const imgElement = document.createElement('img');
	imgElement.src = `./assets/img/garden/garden-${index + 1}.jpg`;
	imgElement.alt = `garden ${9 + index}`;

	outerDiv.appendChild(imgElement);

	return outerDiv;
};

masonryBtn.addEventListener('click', () => {
	const elems = [];
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < 9; i++) {
		const elem = getItemElement(i);
		fragment.appendChild(elem);
		elems.push(elem);
	}

	// append elements to grid container
	masonryContainer.appendChild(fragment);
	msnry.appended(elems);

	masonryBtn.classList.add('hidden');
	masonryContainer.classList.remove('masonry-background');
});
