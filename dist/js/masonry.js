const masonryContainer = document.getElementById('masonry-grid');
const masonryBtn = document.querySelector('.masonry-button');

const msnry = new Masonry(masonryContainer, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	gutter: '.gutter-sizer',
	percentPosition: true,
});

const newImages = [
	{
		imageURL: `${IMG_URL}/project-10.jpg`,
		imageAlt: 'project 10',
	},

	{
		imageURL: `${IMG_URL}/project-11.jpg`,
		imageAlt: 'project 11',
	},

	{
		imageURL: `${IMG_URL}/project-12.jpg`,
		imageAlt: 'project 12',
	},
];

const getItemElement = (newImage) => {
	const outerDiv = document.createElement('div');
	outerDiv.classList.add('grid-item');

	const imgElement = document.createElement('img');

	imgElement.src = newImage.imageURL;
	imgElement.alt = newImage.imageAlt;
	imgElement.onload = () => {
		msnry.layout();
	};

	outerDiv.appendChild(imgElement);

	return outerDiv;
};

masonryBtn.addEventListener('click', () => {
	const elems = [];
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < newImages.length; i++) {
		const elem = getItemElement(newImages[i]);
		fragment.appendChild(elem);
		elems.push(elem);
	}

	// Append elements to grid container
	masonryContainer.appendChild(fragment);

	// Append and layout new elements
	msnry.appended(elems);

	masonryBtn.classList.add('hidden');
	masonryContainer.classList.remove('masonry-gradient-background');
});
