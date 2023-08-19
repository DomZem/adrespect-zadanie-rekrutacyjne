/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primaryBlack: 'var(--primaryBlack)',
				primaryGreen: 'var(--primaryGreen)',
				primaryGrey: 'var(--primaryGrey)',
				primaryBeige: 'var(--primaryBeige)',
				primaryWhite: 'var(--primaryWhite)',
			},
			height: {
				headerHeight: 'var(--headerHeight)',
			},
			maxWidth: {
				containerWidth: 'var(--containerWidth)',
			},
			fontFamily: {
				montserrat: 'var(--montserrat)',
				inter: 'var(--inter)',
			},
			backgroundImage: {
				'masonry-gradient': 'linear-gradient(360deg, #DCC1AB 0%, rgba(214, 183, 158, 0.00) 100%)',
			},
		},
	},
	plugins: [],
};
