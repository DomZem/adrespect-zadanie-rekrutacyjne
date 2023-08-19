const grid = document.querySelector('.masonry-grid');
const hiddenGridElements = document.querySelectorAll('.grid-item-hidden');
const masonryBtn = document.querySelector('.masonry-button');

const msnry = new Masonry(grid, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	gutter: 43,
	percentPosition: true,
});

masonryBtn.addEventListener('click', () => {
	var elems = [];
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 9; i++) {
		var elem = getItemElement(i);
		fragment.appendChild(elem);
		elems.push(elem);
	}

	// append elements to grid container
	grid.appendChild(fragment);
	msnry.appended(elems);

	masonryBtn.classList.add('hidden');
	grid.classList.remove('masonry-background');
});

function getItemElement(index) {
	const outerDiv = document.createElement('div');
	outerDiv.classList.add('grid-item', 'grid-item-hidden');

	const imgElement = document.createElement('img');
	imgElement.src = `./assets/img/garden/garden-${index + 1}.jpg`;
	imgElement.alt = `garden ${9 + index}`;

	outerDiv.appendChild(imgElement);

	return outerDiv;
}
