/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			kaushan: ['"Kaushan Script"'],
		},
		extend: {
			colors: {
				green: {
					DEFAULT: '#00f260',
				},
				blue: {
					DEFAULT: '#061d8c',
				},
			},
		},
	},
	plugins: [],
}
