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
			fontFamily: {
				montserrat: 'var(--montserrat)',
				inter: 'var(--inter)',
			},
		},
	},
	plugins: [],
};
